import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export interface UserAccount {
  email: string;
  id: string;
}

export const getResponse = async (code: string) => {
  try {
    // TODO: env로 바꾸기
    const params = {
      grant_type: "authorization_code",
      client_id: "043c7a5cbbacb67d0ce5de6b65e1e062" || "",
      redirect_uri: "http://localhost:3000/auth",
      code: code,
    };
    const responseQueryString = new URLSearchParams(params).toString();
    const response = await fetch(
      `https://kauth.kakao.com/oauth/token?${responseQueryString}`,
      { method: "POST" }
    );
    const jsonResponseData = await response.json();
    const { access_token } = jsonResponseData;
    const kapiParams = {
      secure_resource: "true",
      property_key: '["kakao_account.email"]',
    };
    const kapiQueryString = new URLSearchParams(kapiParams).toString();
    const kapiData = await fetch(
      `https://kapi.kakao.com/v2/user/me?${kapiQueryString}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    const jsonKapiData = await kapiData.json();
    const email = jsonKapiData["kakao_account"].email;
    const id = jsonKapiData.id;
    console.log(`jsonKapiData:${jsonKapiData}`);

    if (!email) {
      throw new Error("이메일이 없습니다");
    }
    return { email, id };
  } catch (error) {
    console.log(`getResponse 중 에러: ${error}`);
    return { email: "", id: "" };
  }
};

export async function login({ email, id }: UserAccount) {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, id);
  } catch (err) {
    error = err;
    if (error instanceof Error) {
      console.log(error.message);
    }
  }

  return { result, error };
}

export async function signUp({ email, id }: UserAccount) {
  let result = null;
  let error = null;
  try {
    console.log(`auth: ${auth}, email:${email}, id:${id}`);
    result = await createUserWithEmailAndPassword(auth, email, id);
    return { result, error };
  } catch (err) {
    error = err;
    if (error instanceof Error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        console.log("이미 가입된 메일");
        await login({ email, id });
      } else {
        alert(`에러 내용: ${error}`);
      }
    }
  }
}

export async function logout(email: string) {
  console.log(email);
}

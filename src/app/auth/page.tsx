"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../firebase/config";

interface UserAccount {
  email: string;
  id: string;
}

const getResponse = async (code: string) => {
  try {
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
    console.log(jsonKapiData, "jsonkapidata");
    const email = jsonKapiData["kakao_account"].email;
    const id = jsonKapiData.id;

    if (!email) {
      throw new Error("이메일이 없습니다");
    }
    return { email, id };
  } catch (error) {
    console.log(error);
    return { email: "", id: "" };
  }
};

async function login({ email, id }: UserAccount) {
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

async function signUp({ email, id }: UserAccount) {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, id);
    console.log(`auth: ${auth}, email:${email}, id:${id}`);
  } catch (err) {
    error = err;
    if (error instanceof Error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        await login({ email, id });
      } else {
        alert(error);
      }
    }
    return { result, error };
  }
}

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (!code) return;

    async function login(code: string) {
      const response: UserAccount = await getResponse(code);
      const { email, id } = response;
      console.log(response?.email);
      const signUpResult = await signUp({ email, id });
      console.log("signUpResult:", signUpResult);
      router.push("/");
    }
    login(code);
  }, [router]);

  return <p>redirect...</p>;
}

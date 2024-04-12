"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  UserAccount,
  getResponse,
  signUp,
} from "../../components/Login/loginFunctions";

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (!code) return;

    async function login(code: string) {
      const response: UserAccount = await getResponse(code);
      const { email, id } = response;
      const signUpResult = await signUp({ email, id });
      console.log("signUpResult:", signUpResult);
      router.push("/");
    }
    login(code);
  }, [router]);

  return <p>redirect...</p>;
}

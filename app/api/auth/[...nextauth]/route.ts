import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    // TODO: meta.env에서 import가 되게
    KakaoProvider({
      // clientId: import.meta.env.VITE_REDIRECT_URI,
      clientId: "043c7a5cbbacb67d0ce5de6b65e1e062",
      // clientSecret: import.meta.env.VITE_CLIENT_SECRET_KEY,
      clientSecret: "Y9D0eiA7J13mHwBCh8Y9NtCeoq5QbjbJ",
    }),
  ],
});

export { handler as GET, handler as POST };

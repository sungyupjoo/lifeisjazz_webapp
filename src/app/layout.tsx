import Script from "next/script";

export const metadata = {
  title: "Life is Jazz",
  description: "",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <Script type="module" src="/src/main.tsx"></Script>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d5fdd6e2dcb937e3fca752e4eaddb850&autoload=false"
      ></Script>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
        integrity="sha384-l+xbElFSnPZ2rOaPrU//2FF5B4LB8FiX5q4fXYTlfcG4PGpMkE1vcL7kNXI6Cci0"
        crossOrigin="anonymous"
      ></Script>
      <body>{children}</body>
    </html>
  );
}

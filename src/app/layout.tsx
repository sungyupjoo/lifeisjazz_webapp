import Script from "next/script";
import KakaoInit from "../components/Login/KakaoInit";

export const metadata = {
  title: "Life is Jazz",
  description: "",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d5fdd6e2dcb937e3fca752e4eaddb850&autoload=false"
      ></Script>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
        integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
        crossOrigin="anonymous"
      ></Script>
      <KakaoInit />
      <body>{children}</body>
    </html>
  );
}

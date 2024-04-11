"use client";
import Script from "next/script";

export default function KakaoInit() {
  // TODO: import.meta.env로 대체할 것
  const REST_API_KEY = "043c7a5cbbacb67d0ce5de6b65e1e062";

  function kakaoInit() {
    window.Kakao.init(REST_API_KEY);
  }
  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      onLoad={kakaoInit}
    />
  );
}

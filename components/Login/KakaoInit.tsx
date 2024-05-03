"use client";
import Script from "next/script";

export default function KakaoInit() {
  function kakaoInit() {
    window.Kakao.init(process.env.REST_API_KEY);
  }
  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      onLoad={kakaoInit}
    />
  );
}

import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const address = new window.kakao.maps.LatLng(37.490506, 126.993088);
      const options = {
        center: address,
        level: 4,
      };
      const marker = new window.kakao.maps.Marker({
        position: address,
      });
      const map = new window.kakao.maps.Map(container, options);
      marker.setMap(map);
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        marginTop: "2rem",
        width: "50%",
        height: "400px",
        borderRadius: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        flexShrink: 0,
      }}
    ></div>
  );
}

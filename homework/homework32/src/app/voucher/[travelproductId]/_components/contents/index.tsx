import { useEffect } from "react";
import { useVoucherDetail } from "../hook";
import styles from "./styles.module.css";
import Dompurify from "dompurify";

declare const window: Window & { kakao: any };

export default function ContentsUI() {
  const { data } = useVoucherDetail();

  const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

  useEffect(() => {
    if (!data?.fetchTravelproduct.travelproductAddress) return;

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const lat = data.fetchTravelproduct.travelproductAddress?.lat;
        const lng = data.fetchTravelproduct.travelproductAddress?.lng;
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, [data]);

  return (
    <div className="column__sort gap__24">
      <div className="div"></div>
      <div className="column__sort gap__16">
        <h3 className="f__20 w__700 l__28 c__333333">상세 설명</h3>
        {typeof window !== "undefined" ? (
          <div
            className="w__400 c__333333"
            dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.fetchTravelproduct.contents ?? "") }}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="div"></div>
      <div className="column__sort gap__16">
        <h3 className="f__20 w__700 l__28 c__333333">상세 위치</h3>
        <div id="map" className={`${styles.product__location} br__16 border__E4E4E4 bg__E4E4E4`}></div>
      </div>
    </div>
  );
}

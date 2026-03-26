import { useEffect } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

declare const window: Window & { kakao: any };
type AddressProps = {
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
};

export const useAddress = ({ setValue, watch }: AddressProps) => {
  const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;
  const address = watch("travelproductAddress.address");

  useEffect(() => {
    if (!address) return;
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            setValue("travelproductAddress.lat", Number(result[0].y));
            setValue("travelproductAddress.lng", Number(result[0].x));

            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
            map.setCenter(coords);
          }
        });
      });
    };
  }, [address]);

  return { address };
};

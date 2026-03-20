import styles from "./styles.module.css";
import DetailUI from "./detail";
import ZipcodeUI from "./zipcode";
import CoordinateUI from "./coordinate";
import { useVoucherStore } from "@/commons/stores/voucher";
import { IFormProps, ISetFormProps } from "../../types";
import { IModalProps } from "../types";
import { useEffect } from "react";

declare const window: Window & { kakao: any };
type Props = IFormProps & ISetFormProps & IModalProps;

export default function AddressUI({ form, setForm, isModalOpen, setIsModalOpen }: Props) {
  const { isVoucher } = useVoucherStore();
  const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

  useEffect(() => {
    if (!form.travelproductAddress.address) return;

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
        geocoder.addressSearch(form.travelproductAddress.address, function (result: any, status: any) {
          setForm((prev) => ({
            ...prev,
            travelproductAddress: { ...prev.travelproductAddress, lat: result[0].x, lng: result[0].y },
          }));
          if (status === window.kakao.maps.services.Status.OK) {
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
  }, [form.travelproductAddress.address]);

  return (
    <div className="row__sort gap__40">
      <div className={`${isVoucher ? styles.voucher__address : "flex"} column__sort gap__40`}>
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">주소</p>
            {isVoucher ? <p className="c__F66A6A">*</p> : ""}
          </div>
          <ZipcodeUI form={form} setForm={setForm} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <DetailUI form={form} setForm={setForm} />
        </div>
        {isVoucher ? <CoordinateUI form={form} /> : ""}
      </div>
      {isVoucher ? (
        <div className="width__100 column__sort gap__16">
          <p>상세 위치</p>
          <div className="flex br__16 border__E4E4E4 row__sort row__center column__center bg__E4E4E4">
            {form.travelproductAddress.address ? (
              <div id="map" style={{ width: "100%", height: "100%" }}></div>
            ) : (
              <p className="f__14 l__20 c__777777">주소를 먼저 입력해 주세요.</p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

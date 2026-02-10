import { usePurchaseStore } from "@/commons/stores/purchase";

export default function PurchaseButtonUI() {
  const { isActive, setIsActive } = usePurchaseStore();

  return (
    <div className="row__sort gap__16">
      <button
        className={`${isActive ? "black__btn c__ffffff" : "bg__transparent c__525252"} padding__8__16 w__600 click`}
        onClick={() => setIsActive(!isActive)}
      >
        예약 가능 숙소
      </button>
      <button
        className={`${!isActive ? "black__btn c__ffffff" : "bg__transparent c__525252"} padding__8__16  w__600 click`}
        onClick={() => setIsActive(!isActive)}
      >
        예약 마감 숙소
      </button>
    </div>
  );
}

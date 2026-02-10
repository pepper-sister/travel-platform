import { usePurchaseStore } from "@/commons/stores/purchase";

export default function PurchaseButtonUI() {
  const { isActive, setIsActive } = usePurchaseStore();

  return (
    <div className="row__sort gap__16">
      <button
        className={`${isActive ? "bg__000000 c__ffffff" : "bg__transparent c__525252"} btn__border click w__600`}
        onClick={() => setIsActive(!isActive)}
      >
        예약 가능 숙소
      </button>
      <button
        className={`${!isActive ? "bg__000000 c__ffffff" : "bg__transparent c__525252"} btn__border click w__600`}
        onClick={() => setIsActive(!isActive)}
      >
        예약 마감 숙소
      </button>
    </div>
  );
}

import { usePurchase } from "../hook";

export default function PurchaseButtonUI() {
  const { active, setActive } = usePurchase();

  return (
    <div className="row__sort gap__16">
      <button
        className={`${active ? "black__btn c__ffffff" : "bg__transparent c__525252"} padding__8__16 w__600 click`}
        onClick={() => setActive(!active)}
      >
        예약 가능 숙소
      </button>
      <button
        className={`${!active ? "black__btn c__ffffff" : "bg__transparent c__525252"} padding__8__16  w__600 click`}
        onClick={() => setActive(!active)}
      >
        예약 마감 숙소
      </button>
    </div>
  );
}

import { useVoucherStore } from "@/commons/stores/voucher";

export default function ToggleUI() {
  const { isReservable, setIsReservable } = useVoucherStore();

  return (
    <div className="row__sort gap__16">
      <button
        className={`${isReservable ? "bg__000000 c__ffffff" : "bg__transparent c__525252"} btn__border click w__600`}
        onClick={() => setIsReservable(!isReservable)}
      >
        예약 가능 숙소
      </button>
      <button
        className={`${!isReservable ? "bg__000000 c__ffffff" : "bg__transparent c__525252"} btn__border click w__600`}
        onClick={() => setIsReservable(!isReservable)}
      >
        예약 마감 숙소
      </button>
    </div>
  );
}

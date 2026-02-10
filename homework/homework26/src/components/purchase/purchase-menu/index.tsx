import Image from "next/image";
import { usePurchaseMenu } from "./hook";

export default function PurchaseMenuUI() {
  const { reserveIcon } = usePurchaseMenu();

  return (
    <div className="padding__16__0 row__sort row__between">
      {reserveIcon.map(([key, value]) => (
        <div key={key} className="width__100px click column__sort column__center gap__8">
          <Image src={`/images/purchase/purchase-menu/${key}.png`} alt={value} width={40} height={40} />
          <p className="c__333333">{value}</p>
        </div>
      ))}
    </div>
  );
}

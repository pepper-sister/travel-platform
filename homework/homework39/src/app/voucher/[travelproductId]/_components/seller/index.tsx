import Image from "next/image";
import styles from "./styles.module.css";
import { useVoucherDetail } from "../hook";
import { useSeller } from "./hook";
import { Modal } from "antd";
import PointUI from "../point";

export default function SellerUI() {
  const { data } = useVoucherDetail();
  const {
    isModalOpen,
    isShortageModal,
    isChargeModal,
    setIsChargeModal,
    handleOk,
    handleCharge,
    handleCancel,
    onClickPurchase,
  } = useSeller();

  return (
    <div className="flex column__sort gap__24">
      <div className="br__8 padding__24 border__E4E4E4 column__sort gap__20">
        <div className="column__sort gap__8">
          <h4 className="f__24 w__700 l__32">{data?.fetchTravelproduct.price?.toLocaleString()}원</h4>
          <ul className="column__sort gap__4">
            <li className={`${styles.price__txt} f__14 w__400 l__20 c__5F5F5F`}>
              숙박권은 트립트립에서 포인트 충전 후 구매하실 수 있습니다.
            </li>
            <li className={`${styles.price__txt} f__14 w__300 l__20 c__5F5F5F`}>
              상세 설명에 숙박권 사용기한을 꼭 확인해 주세요.
            </li>
          </ul>
        </div>
        <button onClick={onClickPurchase} className="bg__2974E5 br__8 padding__12__16 click c__ffffff">
          구매하기
        </button>
      </div>
      <div className="br__8 padding__24 column__sort gap__12 bg__F2F2F2">
        <h4 className="f__20 w__700 l__28">판매자</h4>
        <div className="row__sort column__center gap__4">
          <Image
            className={`${styles.voucher__profile} br__100`}
            src={(data?.fetchTravelproduct as any).seller?.picture ?? "/images/voucher-detail/profile.jpg"}
            alt="profile"
            width={40}
            height={40}
          />
          <p className="l__20 c__333333">{(data?.fetchTravelproduct as any).seller?.name}</p>
        </div>
      </div>

      <Modal
        centered
        title={<h1 className="f__18 w__600">해당 숙박권을 구매 하시겠어요?</h1>}
        style={{ padding: "24px 24px", textAlign: "center" }}
        open={isModalOpen}
        closable={false}
        footer={
          <div className="row__sort row__center gap__12">
            <button
              onClick={handleCancel}
              className="f__14 l__20 click"
              style={{
                width: "120px",
                padding: "8px 12px",
                border: "1px solid #000000",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
              }}
            >
              취소
            </button>
            <button
              onClick={handleOk}
              className="f__14 l__20 c__ffffff click"
              style={{ width: "120px", padding: "8px 12px", borderRadius: "8px", backgroundColor: "#2974E5" }}
            >
              구매
            </button>
          </div>
        }
      >
        <p className="f__14 l__20 c__333333">해당 숙박권은 포인트로만 구매 가능합니다.</p>
      </Modal>

      <Modal
        centered
        title={<h1 className="f__18 w__600">포인트 부족</h1>}
        style={{ padding: "24px 24px", textAlign: "center" }}
        open={isShortageModal}
        closable={false}
        footer={
          <div className="row__sort row__center gap__12">
            <button
              onClick={handleCancel}
              className="f__14 l__20 click"
              style={{
                width: "120px",
                padding: "8px 12px",
                border: "1px solid #000000",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
              }}
            >
              취소
            </button>
            <button
              onClick={handleCharge}
              className="f__14 l__20 c__ffffff click"
              style={{ width: "120px", padding: "8px 12px", borderRadius: "8px", backgroundColor: "#2974E5" }}
            >
              충전
            </button>
          </div>
        }
      >
        <p className="f__14 l__20 c__333333">포인트가 부족합니다.</p>
        <p className="f__14 l__20 c__333333">포인트 충전 후 구매하세요.</p>
      </Modal>

      <PointUI isChargeModal={isChargeModal} setIsChargeModal={setIsChargeModal} handleCancel={handleCancel} />
    </div>
  );
}

import { Modal } from "antd";
import { useButton } from "./hook";
import PointUI from "../point";

export default function ButtonUI() {
  const {
    isModalOpen,
    isShortageModal,
    isChargeModal,
    setIsChargeModal,
    handleOk,
    handleCharge,
    handleCancel,
    onClickPurchase,
  } = useButton();

  return (
    <>
      <button onClick={onClickPurchase} className="width__100 bg__2974E5 br__8 padding__12__16 click c__ffffff">
        구매하기
      </button>

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
    </>
  );
}

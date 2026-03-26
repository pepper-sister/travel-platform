import { Dropdown, MenuProps, Modal } from "antd";
import Image from "next/image";
import styles from "./styles.module.css";
import { itemList } from "./item";
import { usePoint } from "./hook";
import { IPointProps } from "./types";

export default function PointUI({ isChargeModal, setIsChargeModal, handleCancel }: IPointProps) {
  const { open, setOpen, setSelectedKey, selectedLabel, setSelectedLabel, onClickPayment } = usePoint({
    setIsChargeModal,
  });

  const items: MenuProps["items"] = itemList.map((item) => ({
    label: <span className={styles.dropdown__item}>{item.label}</span>,
    key: item.key,
    onClick: () => setSelectedLabel(item.label),
  }));

  const handleMenuClick: MenuProps["onClick"] = (info) => {
    setSelectedKey(Number(info.key));
  };

  return (
    <Modal
      centered
      title={
        <div>
          <Image src="/images/voucher-detail/charge.png" alt="charge" width={71} height={52} />
          <h1 className="f__18 w__600">충전하실 금액을 선택해 주세요</h1>
        </div>
      }
      style={{ padding: "24px 24px", textAlign: "center" }}
      open={isChargeModal}
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
            onClick={onClickPayment}
            disabled={selectedLabel === "내용입력"}
            className="f__14 l__20 c__ffffff click"
            style={{ width: "120px", padding: "8px 12px", borderRadius: "8px", backgroundColor: "#2974E5" }}
          >
            충전하기
          </button>
        </div>
      }
    >
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        trigger={["click"]}
        rootClassName={styles.dropdownMenu}
        open={open}
        onOpenChange={(flag) => setOpen(flag)}
      >
        <a onClick={(e) => e.preventDefault()}>
          <div
            className={`${styles.dropdown} ${open ? styles.dropdownOpen : ""} ${selectedLabel === "내용입력" ? "c__919191" : "c__000000"} width__100 f__14 l__20 w__400`}
          >
            {selectedLabel}
          </div>
        </a>
      </Dropdown>
    </Modal>
  );
}

import { usePassword } from "./hook";
import styles from "./styles.module.css";
import { Modal } from "antd";

export default function PasswordUI() {
  const { password, isModalOpen, onChangePasswordInput, onChangePasswordInputCheck, showPasswordModal, handleOk } =
    usePassword();

  return (
    <div className="column__sort column__right gap__24">
      <h1 className="width__100 f__18 w__600">비밀번호 변경</h1>

      <div className="width__100 column__sort gap__16">
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">새 비밀번호</p>
            <p className="c__F66A6A">*</p>
          </div>

          <input
            onChange={onChangePasswordInput}
            className={styles.input__password}
            type="password"
            placeholder="새 비밀번호를 입력해 주세요."
          />
        </div>

        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">새 비밀번호 확인</p>
            <p className="c__F66A6A">*</p>
          </div>

          <input
            onChange={onChangePasswordInputCheck}
            className={styles.input__password}
            type="password"
            placeholder="새 비밀번호를 확인해 주세요."
          />
        </div>
      </div>

      <button onClick={showPasswordModal} className={`${styles.password__btn}`} disabled={password}>
        비밀번호 변경
      </button>
      <Modal
        title="비밀번호 변경 완료"
        open={isModalOpen}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>비밀번호가 변경 되었습니다.</p>
      </Modal>
    </div>
  );
}

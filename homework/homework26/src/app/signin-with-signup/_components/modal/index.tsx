import { Modal } from "antd";
import Image from "next/image";
import { IModalProps } from "./types";

export default function ModalUI({ isModalOpen, onClickSignUp }: IModalProps) {
  return (
    <Modal open={isModalOpen} closable={false} footer={null}>
      <div className="column__sort column__center gap__24">
        <div className="column__sort column__center gap__12">
          <h1 className="f__18 w__600">회원가입을 축하 드려요.</h1>
          <Image src="/images/signin-with-signup/logo.png" alt="logo" width={78} height={48} />
        </div>
        <button onClick={onClickSignUp} className="bg__2974E5 br__8 padding__12__16 click f__14 w__600 l__20 c__ffffff">
          로그인 하기
        </button>
      </div>
    </Modal>
  );
}

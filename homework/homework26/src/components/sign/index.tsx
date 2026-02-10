import Image from "next/image";
import { useSign } from "./hook";
import styles from "./styles.module.css";
import { Modal } from "antd";

export default function SignUI() {
  const { isSignUp, input, error, isModalOpen, onChangeInput, onClickSignIn, onClickSignUp } = useSign();

  return (
    <div className="row__sort column__center">
      <div className={`${styles.sign__body} column__sort column__center gap__24`}>
        {isSignUp ? "" : <Image src="/images/sign/logo.png" alt="logo" width={120} height={75} />}
        <h1 className="f__18 w__600">{isSignUp ? "회원가입" : "트립트립에 오신걸 환영합니다."}</h1>
        <div className="width__100 column__sort column__center gap__16">
          <p className="f__14 l__20 c__333333">
            {isSignUp ? "회원가입을 위해 아래 빈칸을 모두 채워 주세요." : "트립트립에 로그인 하세요."}
          </p>
          <div className="column__sort width__100 gap__12">
            <div className="column__sort gap__8">
              {isSignUp ? (
                <div className="row__sort gap__4">
                  <p className="f__12 w__400 l__20 c__333333">이메일</p>
                  <p className="c__F66A6A">*</p>
                </div>
              ) : (
                ""
              )}
              <input
                id="email"
                onChange={onChangeInput}
                className={`${styles.sign__input} ${error ? styles.sign__input__error : ""}`}
                type="text"
                value={input.email}
                placeholder="이메일을 입력해 주세요."
              />
              {isSignUp && error ? <p className="f__12 w__400 l__20 c__F66A6A">이메일을 입력해 주세요.</p> : ""}
            </div>
            {isSignUp ? (
              <div className="column__sort gap__8">
                <div className="row__sort gap__4">
                  <p className="f__12 w__400 l__20 c__333333">이름</p>
                  <p className="c__F66A6A">*</p>
                </div>
                <input
                  id="name"
                  onChange={onChangeInput}
                  className={`${styles.sign__input} ${error ? styles.sign__input__error : ""}`}
                  type="text"
                  placeholder="이름을 입력해 주세요."
                />
                {isSignUp && error ? <p className="f__12 w__400 l__20 c__F66A6A">이름을 입력해 주세요.</p> : ""}
              </div>
            ) : (
              ""
            )}
            <div className="column__sort gap__8">
              {isSignUp ? (
                <div className="row__sort gap__4">
                  <p className="f__12 w__400 l__20 c__333333">비밀번호</p>
                  <p className="c__F66A6A">*</p>
                </div>
              ) : (
                ""
              )}
              <input
                id="password"
                onChange={onChangeInput}
                className={`${styles.sign__input} ${error ? styles.sign__input__error : ""}`}
                type="password"
                value={input.password}
                placeholder="비밀번호를 입력해 주세요."
              />
              {!isSignUp && error ? (
                <p className="f__12 w__400 l__20 c__F66A6A">아이디 또는 비밀번호를 확인해 주세요.</p>
              ) : isSignUp && error ? (
                <p className="f__12 w__400 l__20 c__F66A6A">비밀번호를 입력해 주세요.</p>
              ) : (
                ""
              )}
            </div>
            {isSignUp ? (
              <div className="column__sort gap__8">
                <div className="row__sort gap__4">
                  <p className="f__12 w__400 l__20 c__333333">비밀번호 확인</p>
                  <p className="c__F66A6A">*</p>
                </div>
                <input
                  id="passwordCheck"
                  onChange={onChangeInput}
                  className={`${styles.sign__input} ${error ? styles.sign__input__error : ""}`}
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                />
                {isSignUp && error ? <p className="f__12 w__400 l__20 c__F66A6A">비밀번호를 입력해 주세요.</p> : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <button onClick={onClickSignIn} className="width__100 blue__btn f__18 w__600 c__ffffff">
          {isSignUp ? "회원가입" : "로그인"}
        </button>
        {isSignUp ? (
          ""
        ) : (
          <button onClick={onClickSignUp} className="bg__transparent f__14 w__400 l__20 c__333333 click">
            회원가입
          </button>
        )}
      </div>
      <Image className={styles.sign__img} src="/images/sign/background.jpg" alt="배경" width={1520} height={1080} />
      <Modal open={isModalOpen} closable={false} footer={null}>
        <div className="column__sort column__center gap__24">
          <div className="column__sort column__center gap__12">
            <h1 className="f__18 w__600">회원가입을 축하 드려요.</h1>
            <Image src="/images/sign/logo.png" alt="logo" width={78} height={48} />
          </div>
          <button onClick={onClickSignUp} className="blue__btn f__14 w__600 l__20 c__ffffff">
            로그인 하기
          </button>
        </div>
      </Modal>
    </div>
  );
}

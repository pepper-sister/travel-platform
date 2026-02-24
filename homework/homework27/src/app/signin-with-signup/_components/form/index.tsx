import styles from "./styles.module.css";
import { IFormProps } from "./types";

export default function FormUI({ isSignUp, input, error, onChangeInput }: IFormProps) {
  return (
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
            className={`${styles.sign__input} ${error ? "border__F66A6A" : "border__D4D3D3"} btn__border`}
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
              className={`${styles.sign__input} ${error ? "border__F66A6A" : "border__D4D3D3"} btn__border`}
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
            className={`${styles.sign__input} ${error ? "border__F66A6A" : "border__D4D3D3"} btn__border`}
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
              className={`${styles.sign__input} ${error ? "border__F66A6A" : "border__D4D3D3"} btn__border`}
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
  );
}

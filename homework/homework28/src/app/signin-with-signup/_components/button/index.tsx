import { IButtonProps } from "./types";

export default function ButtonUI({ isSignUp, onClickSignIn, onClickSignUp }: IButtonProps) {
  return (
    <>
      <button
        onClick={onClickSignIn}
        className="width__100 bg__2974E5 br__8 padding__12__16 click f__18 w__600 c__ffffff"
      >
        {isSignUp ? "회원가입" : "로그인"}
      </button>
      {isSignUp ? (
        ""
      ) : (
        <button onClick={onClickSignUp} className="click bg__transparent f__14 w__400 l__20 c__333333">
          회원가입
        </button>
      )}
    </>
  );
}

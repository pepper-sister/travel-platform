import { InputForm } from "@/commons/ui/inputbase";
import { IFormProps } from "./types";
import { useFormContext } from "react-hook-form";

export default function FormUI({ isSignUp }: IFormProps) {
  const {
    formState: { errors },
  } = useFormContext();

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
          <InputForm name="email" className="sign__input" type="text" placeholder="이메일을 입력해 주세요." />
          {errors.email && <p className="f__12 w__400 l__20 c__F66A6A">{String(errors.email.message)}</p>}
        </div>
        {isSignUp ? (
          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="f__12 w__400 l__20 c__333333">이름</p>
              <p className="c__F66A6A">*</p>
            </div>
            <InputForm name="name" className="sign__input" type="text" placeholder="이름을 입력해 주세요." />
            {errors.name && <p className="f__12 w__400 l__20 c__F66A6A">{String(errors.name.message)}</p>}
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
          <InputForm name="password" className="sign__input" type="password" placeholder="비밀번호를 입력해 주세요." />
          {errors.password && <p className="f__12 w__400 l__20 c__F66A6A">{String(errors.password.message)}</p>}
        </div>
        {isSignUp ? (
          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="f__12 w__400 l__20 c__333333">비밀번호 확인</p>
              <p className="c__F66A6A">*</p>
            </div>
            <InputForm
              name="passwordCheck"
              className="sign__input"
              type="password"
              placeholder="비밀번호를 한번 더 입력해 주세요."
            />
            {errors.passwordCheck && (
              <p className="f__12 w__400 l__20 c__F66A6A">{String(errors.passwordCheck.message)}</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import FormUI from "./_components/form";
import ButtonUI from "./_components/button";
import ModalUI from "./_components/modal";
import { useSigninWithSignup } from "./_components/hook";

export default function SigninWithSignup() {
  const { isSignUp, input, error, isModalOpen, onChangeInput, onClickSignIn, onClickSignUp } = useSigninWithSignup();

  return (
    <div className="row__sort column__center">
      <div className="width__400px padding__0__40 column__sort column__center gap__24">
        {isSignUp ? "" : <Image src="/images/signin-with-signup/logo.png" alt="logo" width={120} height={75} />}
        <h1 className="f__18 w__600">{isSignUp ? "회원가입" : "트립트립에 오신걸 환영합니다."}</h1>
        <FormUI isSignUp={isSignUp} input={input} error={error} onChangeInput={onChangeInput} />
        <ButtonUI isSignUp={isSignUp} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp} />
      </div>
      <Image
        className="sign__img"
        src="/images/signin-with-signup/background.jpg"
        alt="배경"
        width={1520}
        height={1080}
      />
      <ModalUI isModalOpen={isModalOpen} onClickSignUp={onClickSignUp} />
    </div>
  );
}

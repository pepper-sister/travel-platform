"use client";

import Image from "next/image";
import FormUI from "./_components/form";
import ButtonUI from "./_components/button";
import ModalUI from "./_components/modal";
import { useSigninWithSignup } from "./_components/hook";
import { FormProvider } from "react-hook-form";
import { useEffect } from "react";

export default function SigninWithSignup() {
  const { methods, isSignUp, isModalOpen, onClickSignIn, onClickSignUp } = useSigninWithSignup();
  const { reset } = methods;
  const { handleSubmit } = methods;

  useEffect(() => {
    reset();
  }, [isSignUp, reset]);

  return (
    <FormProvider {...methods}>
      <form className="row__sort column__center" onSubmit={handleSubmit(onClickSignIn)}>
        <div className="width__400px padding__0__40 column__sort column__center gap__24">
          {isSignUp ? "" : <Image src="/images/signin-with-signup/logo.png" alt="logo" width={120} height={75} />}
          <h1 className="f__18 w__600">{isSignUp ? "회원가입" : "트립트립에 오신걸 환영합니다."}</h1>
          <FormUI isSignUp={isSignUp} />
          <ButtonUI isSignUp={isSignUp} onClickSignUp={onClickSignUp} />
        </div>
        <Image
          className="sign__img"
          src="/images/signin-with-signup/background.jpg"
          alt="배경"
          width={1520}
          height={1080}
        />
        <ModalUI isModalOpen={isModalOpen} onClickSignUp={onClickSignUp} />
      </form>
    </FormProvider>
  );
}

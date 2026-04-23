"use client";

import Image from "next/image";
import FormUI from "./_components/form";
import ButtonUI from "./_components/button";
import ModalUI from "./_components/modal";
import { FormProvider } from "react-hook-form";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { useSigninTitle } from "./hook";
import { useSigninWithSignup } from "./_components/hook";

export default function SigninWithSignup() {
  const { methods, isSignUp, isModalOpen, onClickSignIn, onClickSignUp } = useSigninWithSignup();
  const { reset } = methods;
  const { handleSubmit } = methods;
  const { onClickCancel } = useSigninTitle();

  useEffect(() => {
    reset();
  }, [isSignUp, reset]);

  return (
    <FormProvider {...methods}>
      <div className={`${styles.title} width__100 relative row__sort row__center column__center gap__8 padding__12__0`}>
        <p className="">로그인</p>
        <Image
          className={`${styles.title__img} click`}
          src="/images/signin-with-signup/close.png"
          alt="close"
          width={24}
          height={24}
          onClick={onClickCancel}
        />
      </div>
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
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "calc(100% - 400px)", height: "100vh", objectFit: "cover" }}
        />
        <ModalUI isModalOpen={isModalOpen} onClickSignUp={onClickSignUp} />
      </form>
    </FormProvider>
  );
}

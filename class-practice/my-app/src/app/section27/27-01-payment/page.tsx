"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidv4 } from "uuid";

export default function PaymentPage() {
  const onClickPayment = async () => {
    const result = await PortOne.requestPayment({
      storeId: "store-416f7ff8-27c7-465c-94ba-2e047c0ae764",
      channelKey: "channel-key-437e1867-23b7-4d9e-80c8-961442161376",
      paymentId: uuidv4(),
      orderName: "마우스",
      totalAmount: 3000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "수지",
        phoneNumber: "010-1234-5678",
        email: "suzi@d.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시",
          addressLine2: "3층",
        },
        zipcode: "11111",
      },
      redirectUrl: "http://localhost:3000/section27/27-01-payment-성공페이지",
    });

    // 결제 성공시 로직
    console.log(result);

    // 백엔드에다 결제관련 데이터 넘겨주기(뮤테이션 실행하기) => 숙제API 에서 사용(주의: storeId, channelKey 변경 필요)
    // createPointTransactionOfLoading(paymentId: ... )
  };

  return <button onClick={onClickPayment}>결제하기</button>;
}

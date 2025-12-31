"use client";

import { firebaseApp } from "@/commons/libraries/firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { ChangeEvent, useState } from "react";

export default function MyApisSubmitPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeInputs = async (event: ChangeEvent<HTMLInputElement>) => {
    const boards = collection(getFirestore(firebaseApp), "boards");
    const result = await getDocs(boards);
    const data = result.docs.map((el) => el.data());

    const userInputs = {
      number: data.length + 1,
      ...inputs,
      [event.target.id]: event.target.value,
    };

    setInputs(userInputs);
  };

  const onClickSubmit = async () => {
    const boards = collection(getFirestore(firebaseApp), "boards");
    await addDoc(boards, inputs);
  };

  return (
    <>
      <div>등록페이지</div>
      작성자: <input id="writer" type="text" onChange={onChangeInputs}></input>
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs}></input>
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs}></input>
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}

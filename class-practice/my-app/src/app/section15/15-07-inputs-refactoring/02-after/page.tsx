"use client";

import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  # # 타입적는곳
  # mutation createBoard($mywriter: String, $mytitle: String, $mycontents: String) {
  #   # 전달할 변수 적는곳
  #   createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
  #     _id
  #     number
  #     message
  #   }
  # }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // 여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      variables: { ...inputs }, // variables 이게 $역할을 함
    });
    console.log(result);
  };

  const onChangeInputs = (event) => {
    // setInputs({
    //   ...inputs,
    //   [event.target.id]: event.target.value,
    // });

    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // 한 줄일때는 괄호() 필요 없음
  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs}></input>
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs}></input>
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs}></input>
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}

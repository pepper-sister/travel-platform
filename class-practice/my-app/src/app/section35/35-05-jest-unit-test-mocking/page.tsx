"use client";

import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
        },
      },
    });
    console.log(result);
    const boardId = result.data?.createBoard._id;
    router.push(`/boards/${boardId}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자: <input role="input-writer" type="text" onChange={onChangeWriter}></input>
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle}></input>
      <br />
      내용: <input role="input-contents" type="text" onChange={onChangeContents}></input>
      <br />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API 요청하기
      </button>
    </>
  );
}

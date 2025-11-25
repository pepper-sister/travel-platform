"use client";

import { useBoardWrite } from "./hook";

export default function BoardsWrite(props) {
  const { onChangeWriter, onChangeTitle, onChangeContents, onClickSubmit, onClickUpdate } = useBoardWrite();
  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} defaultValue={props.data?.fetchBoard.writer}></input>
      <br />
      제목: <input type="text" onChange={onChangeTitle} defaultValue={props.data?.fetchBoard.title}></input>
      <br />
      내용: <input type="text" onChange={onChangeContents} defaultValue={props.data?.fetchBoard.contents}></input>
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>{props.isEdit ? "수정" : "등록"}하기</button>
    </>
  );
}

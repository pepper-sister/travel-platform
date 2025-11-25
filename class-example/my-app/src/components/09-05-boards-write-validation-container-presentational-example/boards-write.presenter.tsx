"use client";

export default function BoardsWriteUI(props) {
  return (
    <>
      작성자: <input type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}></input>
      <br />
      제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}></input>
      <br />
      내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}></input>
      <br />
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}

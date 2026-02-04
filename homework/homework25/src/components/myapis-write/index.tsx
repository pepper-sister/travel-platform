import { useMyApisWrite } from "./hook";

export default function MyApisWriteUI() {
  const { onChangeInputs, onClickSubmit } = useMyApisWrite();

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

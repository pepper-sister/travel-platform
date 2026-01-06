import { useMyApis } from "./hook";

export default function MyApisUI() {
  const { board } = useMyApis();

  return (
    <>
      <div>목록페이지</div>

      {board.map((el) => {
        return (
          <div key={el.number} className="row__sort gap__8">
            <span>{el.number}</span>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
          </div>
        );
      })}
    </>
  );
}

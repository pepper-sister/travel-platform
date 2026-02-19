import Image from "next/image";
import Link from "next/link";
import { useButton } from "./hook";

export default function ButtonUI() {
  const { params } = useButton();

  return (
    <div className="row__sort row__center gap__24">
      <Link href={`/boards`} className="white__btn br__8 padding__8__12 row__sort column__center gap__8">
        <Image src="/images/boards-detail/menu.png" alt="menu" width={24} height={24} />
        <p className="f__14 w__600 l__20 c__000000">목록으로</p>
      </Link>
      <Link
        href={`/boards/${params.boardId}/edit`}
        className="white__btn br__8 padding__8__12 row__sort column__center gap__8"
      >
        <Image src="/images/boards-detail/edit.png" alt="edit" width={24} height={24} />
        <p className="f__14 w__600 l__20 c__000000">수정하기</p>
      </Link>
    </div>
  );
}

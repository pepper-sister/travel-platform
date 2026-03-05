import Image from "next/image";
import { IFetchBoardData } from "../types";

export default function TitleUI({ data }: IFetchBoardData) {
  console.log(data?.user?.picture);
  return (
    <div className="row__sort row__between column__center">
      <div className="row__sort gap__4 column__center">
        <Image
          src={data?.user?.picture ?? "/images/boards-detail/profile.jpg"}
          className="br__100 bg__E4E4E4"
          alt="person"
          width={24}
          height={24}
        />
        <p className="f__14 w__300 l__20 c__5F5F5F">{data?.writer}</p>
      </div>
      <p className="f__14 w__300 l__20 c__818181">{data?.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
    </div>
  );
}

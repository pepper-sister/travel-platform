import Image from "next/image";
import { IFetchBoardData } from "../types";
import { useContents } from "./hook";

export default function ContentsUI({ data }: IFetchBoardData) {
  const { getYoutubeEmbedUrl } = useContents();

  return (
    <>
      {data?.images
        ?.filter((el) => el)
        .map((el) => (
          <Image key={el} src={`https://storage.googleapis.com/${el}`} alt="image" width={160} height={160} />
        ))}
      <p className="w__400">{data?.contents}</p>
      {data?.youtubeUrl && (
        <div className="relative padding__24 row__sort row__center bg__F2F2F2">
          <iframe width="822" height="464" src={getYoutubeEmbedUrl(data.youtubeUrl)}></iframe>
        </div>
      )}
    </>
  );
}

import Image from "next/image";
import { IFetchBoardData } from "../types";
import { useContents } from "./hook";
import Dompurify from "dompurify";

export default function ContentsUI({ data }: IFetchBoardData) {
  const { getYoutubeEmbedUrl } = useContents();

  return (
    <>
      {data?.images
        ?.filter((el) => el)
        .map((el) => (
          <Image key={el} src={`https://storage.googleapis.com/${el}`} alt="image" width={160} height={160} />
        ))}
      {typeof window !== "undefined" ? (
        <div className="w__400" dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.contents ?? "") }} />
      ) : (
        <div></div>
      )}
      {data?.youtubeUrl && (
        <div className="youtube__section relative row__sort row__center bg__F2F2F2">
          <iframe className="youtube" src={getYoutubeEmbedUrl(data.youtubeUrl)}></iframe>
        </div>
      )}
    </>
  );
}

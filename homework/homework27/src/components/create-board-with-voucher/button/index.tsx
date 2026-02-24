import { useCreateBoardWithVoucherStore } from "@/commons/stores/create-board-with-voucher";
import { useButton } from "./hook";
import styles from "./styles.module.css";
import { IFormProps } from "../types";
import { IActiveProps, IFetchBoardData } from "./types";

type Props = IFormProps & IActiveProps & IFetchBoardData;

export default function ButtonUI({ form, isActive, data }: Props) {
  const { onClickUpdate, onClickSubmit } = useButton({ form });
  const { isBoardEdit } = useCreateBoardWithVoucherStore();

  return (
    <div className="row__sort row__end">
      <div className="row__sort gap__16">
        <button className="white__btn br__8 padding__12__16 f__18 w__600">취소</button>
        <button
          className={`${styles.submit__btn} bg__2974E5 br__8 padding__12__16 click f__18 w__600 c__ffffff`}
          disabled={isActive}
          onClick={isBoardEdit ? () => onClickUpdate(data?._id ?? "") : onClickSubmit}
        >
          {isBoardEdit ? "수정" : "등록"}하기
        </button>
      </div>
    </div>
  );
}

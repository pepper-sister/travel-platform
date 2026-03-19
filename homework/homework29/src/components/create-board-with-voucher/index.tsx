import { useCreateBoardWithVoucher } from "./hook";
import { useCreateBoardWithVoucherStore } from "@/commons/stores/create-board-with-voucher";
import { useVoucherStore } from "@/commons/stores/voucher";
import ButtonUI from "./button";
import FormUI from "./form";

export default function CreateBoardWithVoucherUI() {
  const { form, setForm, isModalOpen, setIsModalOpen, isActive, data, onChangeForm } = useCreateBoardWithVoucher();
  const { isVoucher } = useVoucherStore();
  const { isBoardEdit } = useCreateBoardWithVoucherStore();

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="f__20 w__700 l__28">
          {isVoucher ? "숙박권 판매하기" : `게시물 ${isBoardEdit ? "수정" : "등록"}`}
        </div>
        <FormUI
          form={form}
          setForm={setForm}
          onChangeForm={onChangeForm}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <ButtonUI form={form} isActive={isActive} data={data?.fetchBoard} />
      </div>
    </div>
  );
}

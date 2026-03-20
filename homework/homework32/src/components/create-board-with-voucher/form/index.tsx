import { useVoucherStore } from "@/commons/stores/voucher";
import AddressUI from "./address";
import ContentsUI from "./contents";
import ImagesUI from "./images";
import NameUI from "./name";
import PasswordUI from "./password";
import PriceUI from "./price";
import TagUI from "./tag";
import TitleUI from "./title";
import YoutubeUI from "./youtube";
import { IFormProps, ISetFormProps } from "../types";
import { IChangeFormProps, IModalProps } from "./types";

type Props = IFormProps & ISetFormProps & IChangeFormProps & IModalProps;

export default function FormUI({ form, setForm, onChangeForm, isModalOpen, setIsModalOpen }: Props) {
  const { isVoucher } = useVoucherStore();

  return (
    <div className="column__sort gap__40">
      <div className="row__sort gap__40">
        <NameUI form={form} onChangeForm={onChangeForm} />
        {isVoucher ? "" : <PasswordUI onChangeForm={onChangeForm} />}
      </div>
      <div className="div"></div>
      <TitleUI form={form} onChangeForm={onChangeForm} />
      <div className="div"></div>
      <ContentsUI form={form} setForm={setForm} onChangeForm={onChangeForm} />
      {isVoucher ? (
        <>
          <div className="div"></div>
          <PriceUI form={form} onChangeForm={onChangeForm} />
          <div className="div"></div>
          <TagUI form={form} onChangeForm={onChangeForm} />
          <div className="div"></div>
        </>
      ) : (
        ""
      )}
      <AddressUI form={form} setForm={setForm} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="div"></div>
      {isVoucher ? "" : <YoutubeUI form={form} onChangeForm={onChangeForm} />}
      <ImagesUI form={form} setForm={setForm} />
    </div>
  );
}

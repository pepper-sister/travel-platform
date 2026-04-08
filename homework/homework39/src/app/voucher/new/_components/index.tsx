import { FormProvider } from "react-hook-form";
import ButtonUI from "./button";
import FormUI from "./form";
import { useCreateVoucher } from "./hook";

export default function CreateVoucherUI() {
  const { methods } = useCreateVoucher();

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="f__20 w__700 l__28">숙박권 판매하기</div>
        <FormProvider {...methods}>
          <form>
            <FormUI />
          </form>
          <ButtonUI />
        </FormProvider>
      </div>
    </div>
  );
}

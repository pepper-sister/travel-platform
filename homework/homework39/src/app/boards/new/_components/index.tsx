import { useCreateBoard } from "./hook";
import ButtonUI from "./button";
import FormUI from "./form";
import { FormProvider } from "react-hook-form";

export default function CreateBoardUI() {
  const { methods } = useCreateBoard();

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="f__20 w__700 l__28">게시물 등록</div>
        <FormProvider {...methods}>
          <form>
            <FormUI {...methods} />
          </form>
          <ButtonUI />
        </FormProvider>
      </div>
    </div>
  );
}

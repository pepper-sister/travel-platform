import { z } from "zod";

export const schema = z
  .object({
    email: z.string().email("이메일 형식에 적합하지 않습니다."),
    name: z.string().min(1, { message: "이름을 입력해주세요." }).optional(),
    password: z
      .string()
      .min(4, { message: "비밀번호는 최소 4자리 이상 입력해 주세요." })
      .max(15, { message: "비밀번호는 최대 15자리로 입력해 주세요." }),
    passwordCheck: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.passwordCheck) return true;
      return data.password === data.passwordCheck;
    },
    {
      message: "비밀번호가 일치하지 않습니다.",
      path: ["passwordCheck"],
    },
  );

export type IForm = z.infer<typeof schema>;

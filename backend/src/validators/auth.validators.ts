import * as zod from "zod";

const registerUserValidation = zod.object({
  email: zod.string(),
  password: zod.string().optional(),
  role: zod.string().optional(),
  notifications: zod.number().optional(),
});

const loginValidation = zod.object({
    email: zod.string(),
    password: zod.string()
})

type registerUserValidation = zod.infer<typeof registerUserValidation>;
type loginValidation = zod.infer<typeof loginValidation>;

export { registerUserValidation, loginValidation };

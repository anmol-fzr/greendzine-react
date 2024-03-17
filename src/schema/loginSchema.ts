import { string, object } from "yup";

const loginSchema = object({
  email: string().email().required().label("Email"),
  password: string().required().min(4).label("Password"),
});

export { loginSchema };

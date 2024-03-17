import { loginSchema } from "@/schema";
import { InferType } from "yup";

type ILoginReq = InferType<typeof loginSchema>;

export type { ILoginReq };

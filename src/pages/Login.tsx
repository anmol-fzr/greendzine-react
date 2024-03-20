import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { loginSchema } from "@/schema";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginReq } from "@/types";
import { Input, Button, BottomSheet } from "@/components";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import envs from "../envs.ts";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit, setValue } = methods;

  useEffect(() => {
    setValue("email", envs.MAIL);
    setValue("password", envs.PASS);
  }, []);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onSubmit: SubmitHandler<ILoginReq> = (data) => {
    if (!(data.email === envs.MAIL && data.password === envs.PASS)) {
      return toast.error("Invalid Password");
    }
    localStorage.setItem("isLogin", "true");
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="space-y-6 my-6">
        <img className="h-[90px] w-[90px]" src="/logo.png" />
        <p className="text-[#36A546CC]">#We are Electric</p>
      </div>
      <FormProvider {...methods}>
        <form
          className="p-4 space-y-6 max-w-md w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <Input
              placeholder="E-mail"
              type="email"
              inputMode="email"
              name="email"
            />
            <Input placeholder="Password" type="password" name="password" />
          </div>
          <Button type="submit">Login</Button>
          <button
            type="button"
            className="text-green-dark w-fit mx-auto text-center"
            onClick={onOpen}
          >
            Forgot password ?
          </button>
        </form>
      </FormProvider>

      <BottomSheet open={isOpen} onDismiss={onClose}>
        <div className="text-white !min-h-[100px]">
          <p className="text-2xl text-center">Don't know the credentials?</p>
          <div className="text-xl mt-4 mb-8 w-fit mx-auto">
            username: {envs.MAIL}
            <br />
            password: {envs.PASS}
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};

export { Login };

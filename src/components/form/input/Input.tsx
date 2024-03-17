import { ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

type Props = ComponentPropsWithoutRef<"input"> & {
  name: string;
};

const baseClassName =
  "h-[60px] bg-black border border-white text-white placeholder-gray-400 w-full rounded-2xl placeholder-grey-fade pl-5 outline-none focus:outline-none w-full";

const Input = ({ name, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <input className={baseClassName} {...register(name)} {...props} />
      <p className="text-error pl-1 pt-1">
        {errors[name as keyof typeof errors]?.message?.toString()}
      </p>
    </div>
  );
};

export { Input };

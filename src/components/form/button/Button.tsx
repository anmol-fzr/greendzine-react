import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const baseClass =
  "bg-green-light text-white border-transparent rounded-3xl h-[50px] w-full hover:scale-105 active:scale-95 transition-all";

const Button = ({ children, className, ...props }: ButtonProps) => {
  const styles = `${baseClass} ${className}`;

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
};

export { Button };

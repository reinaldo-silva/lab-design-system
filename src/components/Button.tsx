import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, asChild }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
        {}
      )}
    >
      {children}
    </Comp>
  );
};

export { Button };

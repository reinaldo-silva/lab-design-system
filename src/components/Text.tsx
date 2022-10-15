import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

const Text: React.FC<TextProps> = ({ size = "md", children, asChild }) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
};

export { Text };

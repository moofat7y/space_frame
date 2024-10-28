import React from "react";
import { twMerge } from "tailwind-merge";

export default function IconButton({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-primary-100/10 duration-200 transition-colors text-primary-900",
        props?.disabled && "opacity-80 pointer-events-none",
        className
      )}
    >
      {children}
    </button>
  );
}

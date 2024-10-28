import React from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  contained: (color) =>
    `bg-${color} text-white hover:bg-${color}/80 hover:shadow-md`,
  outlined: (color) =>
    `border border-${color} text-${color} hover:bg-${color} hover:text-white`,
  text: (color) =>
    `bg-white text-${color} hover:bg-${color}/10 hover:shadow-md`,
};

export default function Button({
  children,
  color,
  variant,
  className,
  startIcon,
  ...props
}) {
  const inputVariant = variants[variant || "contained"](color || "primary-500");

  return (
    <button
      {...props}
      className={twMerge(
        "px-3 py-2 flex items-center justify-center rounded-[4px] duration-200 transition-colors",
        props?.disabled && "opacity-80 pointer-events-none",
        inputVariant,
        startIcon && "flex items-center gap-4",
        className
      )}
    >
      {startIcon && startIcon}
      {children}
    </button>
  );
}

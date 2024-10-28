import React from "react";
import { twMerge } from "tailwind-merge";

export default function MainSection({ className, children, ...props }) {
  return (
    <section {...props} className={twMerge("py-16 overflow-hidden", className)}>
      {children}
    </section>
  );
}

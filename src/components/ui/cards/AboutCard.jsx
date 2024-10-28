import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

export default function AboutCard({ text, className, index }) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      data-os-delay={`${index * 200}`}
      className={twMerge(
        "ps-[10px] w-full pe-11 py-4 bg-[#EDEDED85] rounded-[3px] flex items-center gap-5",
        className
      )}
    >
      <CgShapeCircle className="text-xl md:text-2xl text-secondary-500 shrink-0" />
      <p className="font-medium text-sm md:text-base">{text}</p>
    </div>
  );
}

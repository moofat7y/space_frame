import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ProjectCard({ image, title, description, index }) {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay={`${index * 200}`}
      style={{ boxShadow: "0px 1px 15px 0px #0E224014" }}
      className="w-full rounded-md overflow-hidden"
    >
      <div className="relative">
        <Image
          src={image}
          className="w-full aspect-[386/228] object-cover"
          alt={`${title} project`}
          loading="lazy"
        />
        <div
          style={{
            transform: `rotateY(${locale === "en" ? "0deg" : "180deg"})`,
          }}
          className="border-b-[#FFFFFF] border-r-[#FFFFFF] border-transparent border-[40px] absolute bottom-0 end-0"
        ></div>
      </div>

      <div className="p-4 bg-[#FFFFFF] flex flex-col">
        <h2 className="font-semibold text-lg md:text-xl xl:text-[22px] text-[#0E2240] mb-[10px]">
          {title}
        </h2>
        <p className="line-clamp-3 text-[#000000A3] text-sm md:text-base">
          {description}
        </p>
        <button className="ms-auto mt-9 underline w-fit text-secondary-500 font-semibold">
          {t("seeMore")}
        </button>
      </div>
    </div>
  );
}

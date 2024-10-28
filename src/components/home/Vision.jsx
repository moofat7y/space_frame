import React from "react";
import MainSection from "../ui/sections/MainSection";
import { useLocale, useTranslations } from "next-intl";
import VisionTabs from "../visionTabs";
import Image from "next/image";
import visionImage from "/public/vision/visionImage.png";
import shape1 from "/public/vision/shape1.png";
import shape2 from "/public/vision/shape2.png";

export default function Vision() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <MainSection className={"relative bg-primary-500 pt-20"} id="vision">
      <Image
        style={{ transform: `rotateY(${locale === "en" ? "0deg" : "180deg"})` }}
        src={shape1}
        className="max-w-[180px] absolute top-0 end-0 w-full aspect-[180/193] object-cover z-0 hidden 2xl:block"
     alt="space frame vision image"
     />

      <Image
        style={{ transform: `rotateY(${locale === "en" ? "0deg" : "180deg"})` }}
        src={shape2}
        className="max-w-[239px] absolute bottom-0 start-0 w-full aspect-[239/329] object-cover z-0 hidden 2xl:block"
      alt="space frame vision image"
      />
      <div className="container">
        <h1 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-5xl font-medium max-w-[600px] leading-[64px] ">
          {t("vision.title")}
        </h1>
        <div className="flex gap-5 mt-10 ">
          <div className="w-fit flex-1 hidden items-center xl:flex min-h-[620px]">
            <Image
              src={visionImage}
              className="max-w-[729px] w-full 2xl:w-[50%] aspect-[729/560] object-contain static 2xl:absolute start-0"
              alt="space framer vision image"
            />
          </div>

          <div className="flex-1">
            <VisionTabs />
          </div>
        </div>
      </div>
    </MainSection>
  );
}

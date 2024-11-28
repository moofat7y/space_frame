import React from "react";
import MainSection from "../ui/sections/MainSection";
import aboutImage from "/public/aboutImage.png";
import aboutShape from "/public/aboutShape.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AboutCard from "../ui/cards/AboutCard";
export default function AboutUs() {
  const t = useTranslations("Index");
  const locale = useLocale();

  const aboutList = Array.from({ length: 7 }).map((it, index) => (
    <AboutCard
      key={index}
      text={t(`aboutus.aboutList.${index + 1}`)}
      index={index}
    />
  ));
  return (
    <MainSection id="aboutus" className={" lg:pt-24"}>
      <div className="container 2xl:ms-0 2xl:ps-0 2xl:me-0">
        <div className="flex gap-10 xl:gap-20 items-center  flex-col xl:flex-row">
          <div className="relative w-fit h-fit lg:py-12 shrink-0">
            <Image
              src={aboutImage}
              className="max-w-[672px] w-full aspect-[672/554] object-contain z-[3] relative"
              alt="about us image"
            />

            <Image
              style={{
                transform: `rotateY(${locale === "en" ? "0deg" : "180deg"})`,
              }}
              src={aboutShape}
              className="absolute start-0 top-0 bottom-0 w-full max-w-[495px] aspect-[495/650px] hidden lg:block"
              alt="framer motion about shape"
            />
          </div>

          <div className="">
            <h1
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text-2xl md:text-3xl xl:text-5xl mb-10"
            >
              {t("aboutus.title")}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text-lg xl:text-2xl"
            >
              {t("aboutus.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 lg:py-28">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-2xl md:text-3xl xl:text-5xl mb-8"
        >
          {t("aboutus.aboutSpaceFrame")}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="font-medium"
        >
          {t("aboutus.aboutDetails")}
        </p>

        <div className="flex gap-8 flex-col mt-10">{aboutList}</div>
      </div>
    </MainSection>
  );
}

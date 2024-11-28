import React from "react";
import HeroSlider from "./HeroSlider";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Index");
  return (
    <main className="w-full h-screen">
      <section id="home" className="w-full h-full relative">
        <HeroSlider />

        <div className="absolute top-1/2 z-[6] -translate-y-1/2 text-center max-w-[840px] w-full px-4 left-1/2 -translate-x-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="font-semibold text-2xl md:text-3xl xl:text-5xl text-[#FFFFFF] mb-6"
          >
            {t("hero.mainTitle")}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="100"
            className="text-base md:text-lg xl:text-[22px] text-[#FFFFFF]"
          >
            {t("hero.text")}
          </p>
        </div>
      </section>
    </main>
  );
}

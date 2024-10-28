import React from "react";
import MainSection from "../ui/sections/MainSection";
import { featuresConfig } from "@/lib/config";
import FeatureCard from "../ui/cards/FeatureCard";
import { useTranslations } from "next-intl";
import featureBg from "/public/featuresBg.png";
import Image from "next/image";

export default function Features() {
  const t = useTranslations("Index");
  const featuresList = featuresConfig.map((it, index) => (
    <div className="col-span-1" key={index}>
      <FeatureCard
        index={index}
        title={t(`features.${it.title}`)}
        description={t(`features.${it.description}`)}
        icon={it.icon}
      />
    </div>
  ));
  return (
    <MainSection id="features" className={"relative pt-28"}>
      <Image
        src={featureBg}
        className="absolute bottom-0 w-full object-contain z-0"
      />
      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 z-[5] relative">
          {featuresList}
        </div>
      </div>
    </MainSection>
  );
}

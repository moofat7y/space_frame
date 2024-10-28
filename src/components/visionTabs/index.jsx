"use client";
import { visionList } from "@/lib/config";
import React, { useState } from "react";
import Tab from "../ui/Tabs/Tab";
import Tabs from "../ui/Tabs/Tabs";
import { useTranslations } from "next-intl";
import AboutCard from "../ui/cards/AboutCard";

export default function VisionTabs() {
  const t = useTranslations("Index");
  const [activeTab, setActiveTab] = useState(0);
  const visionListTabs = visionList.map((it, index) => (
    <Tab
      key={it}
      setActiveTab={setActiveTab}
      currentActiveNumber={activeTab}
      indexNumber={index}
    >
      {t(`vision.tabs.${it}`)}
    </Tab>
  ));

  const list = Array.from({ length: 4 }).map((it, index) => (
    <AboutCard
      className={"bg-[#FFFFFF0D] py-3 text-white"}
      key={index}
      text={t(`${visionList[activeTab]}.list.${index + 1}`)}
    />
  ));
  return (
    <>
      <Tabs>{visionListTabs}</Tabs>

      <div className="mt-10">
        <p className="text-[#FFFFFF] font-medium text-lg md:text-xl">
          {t(`${visionList[activeTab]}.description`)}
        </p>

        <ul className="list-none space-y-6 mt-8">{list}</ul>
      </div>
    </>
  );
}

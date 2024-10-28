import React from "react";
import MainSection from "../ui/sections/MainSection";
import { useTranslations } from "next-intl";
import { projects } from "@/lib/config";
import ProjectCard from "../ui/cards/ProjectCard";
import Button from "../ui/Button";

export default function Projects() {
  const t = useTranslations("Index");
  const projectList = projects.map((it, index) => (
    <div key={index} className="col-span-4">
      <ProjectCard
        image={it}
        index={index}
        title={t(`projects.list.${1}.title`)}
        description={t(`projects.list.${1}.description`)}
      />
    </div>
  ));
  return (
    <MainSection className={"bg-[#EEEEEE]"}>
      <div className="container">
        <h1 className="text-2xl md:text-3xl xl:text-5xl text-[#535353] text-center">
          {t("projects.title")}
        </h1>
        <div className="mt-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-10">
          {projectList}
        </div>

        <Button
          color={"secondary-500"}
          variant={"contained"}
          className={"px-8 mx-auto mt-8 rounded-none"}
        >
          {t("viewAll")}
        </Button>
      </div>
    </MainSection>
  );
}

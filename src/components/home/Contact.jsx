import React from "react";
import MainSection from "../ui/sections/MainSection";
import Location from "../contact/Map";
import { useTranslations } from "next-intl";
import ContactForm from "../contact/ContactForm";
import { contactInfo, socialMediaLinks } from "@/lib/config";

export default function Contact() {
  const t = useTranslations("Index");

  const contactList = contactInfo.map((it, index) => (
    <li key={index} className="flex items-center gap-5">
      <span className="text-secondary-500 text-lg md:text-2xl">{it.icon}</span>
      <p className="text-primary-500 leading-4 text-sm md:text-base">
        {it.label}
      </p>
    </li>
  ));

  const socialMediaList = socialMediaLinks.map((it, index) => (
    <li
      key={index}
      className="bg-primary-500 text-white text-base rounded-full w-[28px] aspect-square flex items-center justify-center"
    >
      {it.icon}
    </li>
  ));
  return (
    <MainSection data-aos="fade-up" data-aos-duration="2000" className={"map"}>
      <div className="container">
        <Location />
        <div className="flex flex-col lg:flex-row gap-14 mt-10 justify-between">
          <div className="lg:max-w-[750px] w-full">
            <p className="text-base lg:text-lg xl:text-xl text-primary-500">
              {t("contact.text")}
            </p>
            <ContactForm />
          </div>
          <div className="lg:max-w-[340px] w-full">
            <p className="text-secondary-500 text-[14px] font-semibold">
              {t("contact.corporate")}
            </p>
            <ul className="list-none space-y-8 mt-8">{contactList}</ul>

            <div className="mt-10">
              <p className="text-secondary-500 font-medium">
                {t("contact.followUs")}
              </p>

              <ul className="mt-5 list-none flex gap-5">{socialMediaList}</ul>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
}

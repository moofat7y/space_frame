import React from "react";
import logo from "/public/logo2.png";
import Image from "next/image";
import { contactInfo, navBarConfing, socialMediaLinks } from "@/lib/config";
import { useTranslations } from "next-intl";
import NavItem from "../header/NavItem";
export default function Footer() {
  const t = useTranslations("Index");
  const contactList = contactInfo.map((it, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="text-white text-lg">{it.icon}</span>
      <p className="text-white leading-4 text-[15px] max-w-[260px]">
        {it.label}
      </p>
    </li>
  ));

  const socialMediaList = socialMediaLinks.map((it, index) => (
    <div
      key={index}
      className="bg-white text-primary-400 text-base rounded-full w-[28px] aspect-square flex items-center justify-center"
    >
      {it.icon}
    </div>
  ));

  const navList = navBarConfing.map((it, index) => (
    <NavItem
      key={index}
      href={it.href}
      label={t(`nav.${it.label}`)}
      className={"text-[#FFFFFF] text-base"}
    />
  ));
  return (
    <footer className="bg-primary-400 py-9">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between border-b border-b-[#FFFFFF] pb-5 space-y-4 xl:space-y-0">
          <Image
            width={1000}
            height={1000}
            src={logo}
            alt="space frame logo"
            className="aspect-[277/96] max-w-[150px] md:max-w-[277px] w-full object-contain"
          />

          <div>
            <p className="text-secondary-500 text-[14px] font-meduim">
              {t("contact.corporate")}
            </p>
            <ul className="list-none flex flex-col md:flex-row gap-3 mt-5">
              {contactList}
            </ul>
          </div>

          <div className="text-[14px]">
            <p className="text-secondary-500 font-medium">
              {t("contact.followUs")}
            </p>

            <ul className="mt-5 list-none flex gap-5">{socialMediaList}</ul>
          </div>
        </div>

        <div className="flex justify-between items-center ps-10 py-4">
          <p className="text-xs text-[#FFFFFF]">2021 © DBcompany</p>
          <ul className="gap-8 list-none hidden md:flex">{navList}</ul>
        </div>
      </div>
    </footer>
  );
}

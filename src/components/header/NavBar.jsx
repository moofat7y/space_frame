import Image from "next/image";
import React from "react";
import logo from "/public/logo1.png";
import { navBarConfing } from "@/lib/config";
import NavItem from "./NavItem";
import Button from "../ui/Button";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import MobileSlider from "../MobileSideBar";

export default function NavBar() {
  const t = useTranslations("Index");
  const navList = navBarConfing.map((it) => (
    <NavItem href={it.href} label={t(`nav.${it.label}`)} />
  ));
  return (
    <nav className=" w-full absolute left-0 z-10">
      <div className="container py-2 px-2 sm:px-4 sm:py-6 md:py-8">
        <div className="px-4 py-3 bg-white rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-12 w-full">
            <Image
              className="w-full max-w-[175px] aspect-[175/64] object-contain"
              src={logo}
              alt="space frame logo"
            />

            <ul className="hidden lg:flex gap-8 list-none">{navList}</ul>
            <div className="items-center ms-auto gap-4 hidden lg:flex">
              <Button
                variant={"contained"}
                color={"secondary-500"}
                className={"py-4"}
                startIcon={<MdOutlineEmail className="text-2xl text-white" />}
              >
                {t("nav.contactus")}
              </Button>
            </div>

            <MobileSlider />
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { navBarConfing } from "@/lib/config";
import { useLocale, useTranslations } from "next-intl";
import logo from "/public/logo1.png";
import Image from "next/image";

export default function MobileSlider({ isOpen, setIsOpen }) {
  const sliderRef = useRef();
  const pathname = usePathname();
  const t = useTranslations("Index");
  const locale = useLocale();

  const handleClick = (e) => {
    if (sliderRef.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed md:hidden" onClick={(e) => handleClick(e)}>
      {/* Background Overlay */}
      <div
        className={`layer z-40 h-[100vh]  bg-[#4d58694f] fixed top-0 start-0 duration-200 ease-in-out ${
          isOpen ? "w-[100%]" : "w-0"
        }`}
      ></div>

      {/* Slider Navigation */}
      <div
        ref={sliderRef}
        id="drawer-navigation"
        className={`fixed top-0 start-0 z-40 w-64 h-screen overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen
            ? ""
            : locale === "en"
            ? "-translate-x-full"
            : "translate-x-full"
        } bg-white`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex py-5 px-3 border-b justify-between items-center">
          {/* Brand Logo */}
          <h3 className="text-primary-500 font-black text-xl inline-block">
            <Image
              className="w-full max-w-[100px] md:max-w-[175px] aspect-[175/64] object-contain"
              src={logo}
              alt="space frame logo"
            />
          </h3>

          {/* Close Button */}
          <div
            onClick={() => setIsOpen(false)}
            role="button"
            className="p-1 rounded-full bg-secondary-500/50 rotate-0 hover:rotate-180 duration-200 ease-in-out"
          >
            <IoIosClose className="" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {navBarConfing.map((menu, index) => (
              <li
                key={index}
                className={`group px-2 py-3 border-l-4 border-transparent ${
                  pathname === menu.href ? "!border-secondary-500" : ""
                }`}
              >
                <Link
                  className={`hover:text-secondary-500 capitalize ${
                    locale === "en"
                      ? "group-hover:translate-x-3"
                      : "group-hover:-translate-x-3"
                  } inline-block duration-150 font-semibold ${
                    pathname === menu.href
                      ? "text-secondary-500 translate-x-3"
                      : ""
                  }`}
                  href={menu.href}
                >
                  {t(`nav.${menu.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

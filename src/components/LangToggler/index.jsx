"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function LangToggler({ className }) {
  const lang = useLocale();
  const router = useRouter();
  const nextLocale = lang === "en" ? "ar" : "en";
  const handleLangChange = () => {
    const currentLocation = window.location.pathname
      .split("/")
      .slice(2)
      .join("/");
    router.replace(`/${nextLocale}/${currentLocation}`);
  };
  return (
    <button
      className={twMerge(
        "bg-whiten text-primary-400 font-semibold text-xs md:text-base w-6 h-6 md:w-8 md:h-8 flex items-center justify-center  leading-none border-[1px] border-[#E7E9EB] rounded-md duration-150",
        className
      )}
      onClick={handleLangChange}
    >
      {nextLocale === "en" ? "EN" : "ع"}
    </button>
  );
}

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
        "bg-whiten text-primary-400 text-xs md:text-base font-medium p-1 md:p-3 leading-none border-[1px] border-[#E7E9EB] rounded-md duration-150",
        className
      )}
      onClick={handleLangChange}
    >
      {nextLocale === "en" ? "EN" : "ع"}
    </button>
  );
}

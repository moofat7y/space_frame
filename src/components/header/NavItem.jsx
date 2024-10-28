"use client";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function NavItem({ href, label, className }) {
  return (
    <li>
      <Link
        className={twMerge(
          "text-black font-normal text-xl capitalize",
          className
        )}
        href={`${href}`}
      >
        {label}
      </Link>
    </li>
  );
}

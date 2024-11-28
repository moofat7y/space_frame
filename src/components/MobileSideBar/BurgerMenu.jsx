"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "../ui/IconButton";
import MobileSlider from "./MobileSlider";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block lg:hidden">
        <IconButton onClick={() => setIsOpen((prev) => !prev)}>
          <RxHamburgerMenu className="text-primary-500 text-xl" />
        </IconButton>
      </div>

      <MobileSlider isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

import React from "react";
import Button from "../ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "../ui/IconButton";

export default function MobileSlider() {
  return (
    <div className="block lg:hidden ms-auto">
      <IconButton>
        <RxHamburgerMenu className="text-primary-500 text-2xl" />
      </IconButton>
    </div>
  );
}

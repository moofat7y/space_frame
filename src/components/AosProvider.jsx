"use client";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function AosProvider({ children }) {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return <>{children}</>;
}

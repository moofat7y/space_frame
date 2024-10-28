import React from "react";

export default function FeatureCard({ title, description, icon, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay={`${index * 200}`}
      className="w-full h-full px-3 py-6 bg-[#FFFFFF] border-[1px] border-[#FFFFFF] duration-150 transition-colors hover:border-secondary-500 flex flex-col gap-6"
    >
      <span className="text-2xl md:text-3xl xl:text-5xl">{icon}</span>

      <h2 className="text:lg xl:text-2xl">{title}</h2>

      <p className="text-base xl:text-lg">{description}</p>
    </div>
  );
}

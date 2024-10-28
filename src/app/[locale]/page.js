import AboutUs from "@/components/home/AboutUs";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Vision from "@/components/home/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Vision />
      <Projects />
      <Contact />
    </>
  );
}

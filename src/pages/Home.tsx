import { useRef } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Journey from "../components/sections/Journey";
import SelectedWorks from "../components/sections/SelectedWork";
import TechStack from "../components/sections/TechStack";
import ContactCTA from "../components/sections/ContactCTA";
import { useColorTransition } from "../components/hooks/useColorTransition";
import { useRevealOnScroll } from "../components/hooks/useRevealOnScroll";
import { useMagneticButton } from "../components/hooks/useMagneticButton";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useColorTransition();
  useRevealOnScroll();
  useMagneticButton(mainRef);

  return (
    <main ref={mainRef}>
      <Hero />
      <About />
      <Journey />
      <SelectedWorks />
      <TechStack />
      <ContactCTA />
    </main>
  );
}
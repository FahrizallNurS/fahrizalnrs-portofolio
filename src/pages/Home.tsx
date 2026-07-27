import { useRef } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Journey from "../components/sections/Journey";
import SelectedWorks from "../components/sections/SelectedWork";
import TechStack from "../components/sections/TechStack";
import ContactCTA from "../components/sections/ContactCTA";
import { useColorTransition } from "../components/hooks/useColorTransition";
import { useRevealOnScroll } from "../components/hooks/useRevealOnScroll";

export default function Home() {
  useColorTransition();
  useRevealOnScroll();

  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <SelectedWorks />
      <TechStack />
      <ContactCTA />
    </main>
  );
}
import { useEffect } from "react";

export function useColorTransition() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-color");
            if (color) {
              document.body.style.backgroundColor = color;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
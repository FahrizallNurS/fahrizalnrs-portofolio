import { useEffect, type RefObject } from "react";

export function useMagneticButton(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
 
    const buttons =
      container.querySelectorAll<HTMLElement>(".magnetic-btn");
 
    function handleMouseMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }
 
    function handleMouseLeave(this: HTMLElement) {
      this.style.transform = "translate(0px, 0px)";
    }
 
    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });
 
    // Cleanup: lepas listener pas container unmount (misal Home ganti halaman)
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [containerRef]);
}
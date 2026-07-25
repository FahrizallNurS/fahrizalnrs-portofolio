import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../lib/lenis-context";

/**
 * Dipasang sekali di RootLayout.
 * - Ganti halaman biasa -> scroll balik ke atas
 * - Ganti halaman + bawa state.scrollTo (dari Navbar lintas-halaman)
 *   -> scroll ke section yang dituju setelah halaman baru selesai render
 */
export function useRouteScroll() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const target = (location.state as { scrollTo?: string } | null)
      ?.scrollTo;

    if (target) {
      requestAnimationFrame(() => {
        lenis.scrollTo(`#${target}`, { offset: -80 });
      });
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);
}
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouteScroll } from "../hooks/useRouteScroll";

export default function RootLayout() {
  useRouteScroll();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
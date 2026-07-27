import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/:slug",
        element: <ProjectDetail />,
      },
    ],
  },
]);
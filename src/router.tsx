import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // nanti Fase 4 tinggal nambah di sini:
      // { path: "/projects/:slug", element: <ProjectDetail /> },
    ],
  },
]);
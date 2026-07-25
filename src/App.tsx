import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LenisProvider } from "./components/lib/lenis-context";

function App() {
  return (
    <LenisProvider>
      <RouterProvider router={router} />
    </LenisProvider>
  );
}

export default App;
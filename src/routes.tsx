import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profissoes from "./pages/Profissoes";
import FaixaSalarial from "./pages/FaixaSalarial";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profissoes",
    element: <Profissoes />,
  },
  {
    path: "/faixasalarial",
    element: <FaixaSalarial />,
  },
]);

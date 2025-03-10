import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profissoes from "./pages/Profissoes";
import FaixaSalarial from "./pages/FaixaSalarial";
import Cursos from "./pages/Cursos";

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
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/faixasalarial",
    element: <FaixaSalarial />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profissoes from "./pages/Profissoes";
import FaixaSalarial from "./pages/FaixaSalarial";
import Cursos from "./pages/Cursos";
import PaginaErro from "./pages/PaginaErro";
import Final from "./pages/Final";
import SalarioFinal from "./pages/SalarioFinal";

import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
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
      {
        path: "/salariofinal",
        element:<SalarioFinal />,
      },
      {
        path: "/final",
        element: <Final />,
      },
    ],
  },
]);

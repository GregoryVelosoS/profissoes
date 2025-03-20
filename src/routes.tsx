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
        path: "/profissoes",
        element: <Home />,
      },
      {
        path: "/profissoes/inicio",
        element: <Home />,
      },
      {
        path: "/profissoes/profissoes",
        element: <Profissoes />,
      },
      {
        path: "/profissoes/cursos",
        element: <Cursos />,
      },
      {
        path: "/profissoes/faixasalarial",
        element: <FaixaSalarial />,
      },
      {
        path: "/profissoes/salariofinal",
        element:<SalarioFinal />,
      },
      {
        path: "/profissoes/final",
        element: <Final />,
      },
    ],
  },
]);

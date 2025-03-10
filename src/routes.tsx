import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profissoes from "./pages/Profissoes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profissoes",
    element: <Profissoes />,
  },
]);

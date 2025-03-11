import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Importação do RouterProvider
import { RouterProvider } from 'react-router-dom'

//Importação do arquivo que contém as rotas
import { routes } from "./routes";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)

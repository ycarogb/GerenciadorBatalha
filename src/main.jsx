import { StrictMode } from "react"; //importando componentes de terceitos
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//criação de diferentes rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

//criação da Single Page Application e e renderização do conteúdo
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react"; //importando componentes de terceitos
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//criação da Single Page Application e e renderização do conteúdo
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

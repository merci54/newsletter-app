import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "modern-normalize";
import App from "./components/App/App";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div><Toaster/></div>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "@/assets/styles/index.scss";
import "@/assets/styles/flex.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/my-site">
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);

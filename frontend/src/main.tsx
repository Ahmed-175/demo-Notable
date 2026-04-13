import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { UserContextProvider } from "./context/userContext.tsx";
import { ToastProvider } from "./context/toastContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
);

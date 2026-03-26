import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div>Loading translations...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div>Loading translations...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

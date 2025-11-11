import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import AppOrderForm from "./components/AppOrderForm";
import AppSearchForm from "./components/SearchForm/AppSearchForm";
import "modern-normalize";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Модуль 3. Форми та ефекти.</h1>
    <h2>Заняття 5. Форми</h2>
    <App />
    <AppOrderForm />
    <AppSearchForm />
  </React.StrictMode>
);

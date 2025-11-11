import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import AppOrderForm from "./components/AppOrderForm";
import AppSearchForm from "./components/SearchForm/AppSearchForm";
import MyComponent from "./components/MyComponent/MyComponent";
import OrderFormRadio from "./components/OrderFormRadio";
import OrderFormCheckbox from "./components/OrderFormChckbox";
import OrderFormSelect from "./components/OrderFormSelect";
import "modern-normalize";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Модуль 3. Форми та ефекти.</h1>
    <h2>Заняття 5. Форми</h2>
    <App />
    <AppOrderForm />
    <AppSearchForm />
    <p>Хук useId</p>
    <MyComponent />
    <p>Радіокнопки</p>
    <OrderFormRadio />
    <p>Чекбокси</p>
    <OrderFormCheckbox />
    <p>Випадаючий список</p>
    <OrderFormSelect />
  </React.StrictMode>
);

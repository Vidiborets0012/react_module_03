import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import AppOrderForm from "./components/AppOrderForm";
import AppSearchForm from "./components/SearchForm/AppSearchForm";
import MyComponent from "./components/MyComponent/MyComponent";
import OrderFormRadio from "./components/OrderFormRadio";
import OrderFormCheckbox from "./components/OrderFormChckbox";
import OrderFormSelect from "./components/OrderFormSelect";
// Ефекти
import AppEffects from "./effects/AppEffects";
import AppStrict from "./effects/AppStrict";
import AppTimer from "./effects/AppTimer";
import AppModal from "./effects/AppModal";
import AppLocal from "./effects/AppLocal";
import AppSidebar from "./lecture6/AppSidebar";

import "modern-normalize";
import AppL5 from "./comp/AppL5";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Модуль 3. Форми та ефекти.</h1>
    <h2>Заняття 5. Форми</h2>
    <h3>Конспект</h3>
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
    <h3>Лекція</h3>
    <AppL5 />
    <h2>Заняття 6. Побічні ефекти</h2>
    <h3>Конспект</h3>
    <AppEffects />
    <div>
      <AppStrict />
    </div>
    <AppTimer />
    <AppModal />
    <p>Робота з LocalStorage</p>
    <AppLocal />
    <h3>Лекція</h3>
    <AppSidebar />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage.jsx";
import Layout from "./Layout/Layout.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CartPage from "./components/pages/CartPage.jsx";
import ElectronicsPage from "./components/pages/ElectronicsPage.jsx";
import JewelryPage from "./components/pages/JewelryPage.jsx";
import MeansPage from "./components/pages/MeansPage.jsx";
import WomensPage from "./components/pages/WomensPage.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/electronics",
        element: <ElectronicsPage />,
      },
      {
        path: "/jewelry",
        element: <JewelryPage />,
      },
      {
        path: "/means",
        element: <MeansPage />,
      },
      {
        path: "/womens",
        element: <WomensPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </React.StrictMode>
);

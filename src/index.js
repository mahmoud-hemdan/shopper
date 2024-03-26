import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 Route,
  Link,
} from "react-router-dom";
import App from "./App";
import AllShopPage from "./ShopPage/AllShopPage";
import AllDetail from "./ShopDetailPage/AllDetail";
import AllCartPage from "./CartPage/AllCartPage";
import AllCheckout from "./Checkoutpage/AllCheckout";
import AllContact from "./ContactPage/AllContact";
import AllLogin from "./LoginPage/AllLogin";
import AllCart from "./Cart/AllCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Shop",
    element: <AllShopPage/>,
  },

  {
    path: "Detail",
    element: <AllDetail/>,
  },

  {
    path: "Cart",
    element: <AllCartPage/>,
  },

  {
    path: "Checkout",
    element: <AllCheckout/>,
  },

  {
    path: "Contact",
    element: <AllContact/>,
  },

  {
    path: "Login",
    element: <AllLogin/>,
  },

  {
    path: "/Car",
    element:<AllCart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
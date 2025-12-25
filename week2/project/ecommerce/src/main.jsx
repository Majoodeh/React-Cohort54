import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";

import Layout from "./Layout.jsx";
import Category from "./components/Category.jsx";
import allProducts from "./fake-data/all-products.js";
import Product from "./components/Product.jsx";
import allCategories from "./fake-data/all-categories.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <>
            <Category allCategories={allCategories} />
            <Home allProducts={allProducts} />
          </>
        }
      />
      <Route path=":productId" element={<Product />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";

import Layout from "./Layout.jsx";
import Category from "./components/Category.jsx";
import Product from "./components/Product.jsx";
import { FavoritesProvider } from "./FavoritesContext.js";
import FavoritesContext from "./FavoritesContext.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <>
            <Category />
            <Home />
          </>
        }
      />
      <Route path=":productId" element={<Product />} />
      <Route path="/favorites" element={<FavoriteProducts />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </StrictMode>
);

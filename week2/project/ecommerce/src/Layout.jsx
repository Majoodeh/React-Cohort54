import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import allCategories from "./fake-data/all-categories";
import Product from "./components/Product";
import allProducts from "./fake-data/all-products";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Product from "./components/Product";

function Layout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default Layout;

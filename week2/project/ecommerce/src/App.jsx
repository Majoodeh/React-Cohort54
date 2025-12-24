import { useState } from "react";
import "./App.css";
import CategoryBtn from "./components/Category";
import allCategories from "./fake-data/all-categories";
import Product from "./components/Home";
import allProducts from "./fake-data/all-products";
import Header from "./components/Header";

console.log("Buttons", CategoryBtn);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}

      <CategoryBtn allCategories={allCategories} />

      <Product allProducts={allProducts} />
    </>
  );
}

export default App;

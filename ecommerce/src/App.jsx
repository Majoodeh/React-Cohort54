import { useState } from "react";
import "./App.css";
import CategoryBtn from "../components/category";
import allCategories from "./fake-data/all-categories";
import Product from "../components/product";
import allProducts from "./fake-data/all-products";

console.log("Buttons", CategoryBtn);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <CategoryBtn allCategories={allCategories} />
        </div>
        <div>
          <Product allProducts={allProducts} />
        </div>
      </div>
    </>
  );
}

export default App;

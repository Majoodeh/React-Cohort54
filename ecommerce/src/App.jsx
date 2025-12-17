import { useState } from "react";
import "./App.css";
import CategoryBtn from "../components/category";
import allCategories from "./fake-data/all-categories";
import Product from "../components/product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <CategoryBtn title={allCategories[0]} />
          <CategoryBtn title={allCategories[1]} />
          <CategoryBtn title={allCategories[2]} />
          <CategoryBtn title={allCategories[3]} />
        </div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
}

export default App;

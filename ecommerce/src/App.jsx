import { useState } from "react";
import "./App.css";
import CategoryBtn from "../components/category";
// import allCategories from "./fake-data/all-categories";
import Product from "../components/product";

console.log("Buttons", CategoryBtn);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <CategoryBtn />
        </div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
}

export default App;

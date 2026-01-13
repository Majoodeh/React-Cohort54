import React from "react";
import { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to get products");
        }
        const data = await response.json();

        setCategories(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getCategories();
  }, []);

  let buttonsArr = [];
  const buttonClick = (event) => {
    const button = event.target.id;
    const products = document.querySelectorAll(".product-item");

    // if pressed the same button twice
    if (buttonsArr.includes(button)) {
      products.forEach((product) => {
        product.style.display = "block";
      });
      buttonsArr = [];
      isClicked = false;
      return;
    }
    buttonsArr.push(button);

    isClicked = true;

    products.forEach((product) => {
      if (product.id !== button) {
        product.style.display = "none";
      } else {
        product.style.display = "block";
      }
    });
  };

  return (
    <>
      <div className="mt-10 mx-auto max-w-max relative z-40 bg-white/80 backdrop-blur-md p-4 flex flex-wrap justify-center gap-2 shadow-md rounded-2xl border border-white/20">
        {categories.map((category) => {
          return (
            <button
              id={category.replace("FAKE: ", "")}
              key={category}
              className="rounded-md bg-green-500 py-2 px-4 text-sm text-white hover:bg-green-700 transition-all"
              type="button"
              onClick={buttonClick}
            >
              {category.replace("FAKE: ", "")}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Category;

import React from "react";
import { useState } from "react";

function CategoryBtn(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonsArr, setButtonsArr] = useState([]);

  const buttonClick = (event) => {
    const button = event.target.id;
    const products = document.querySelectorAll(".product-item");

    // if pressed the same button twice
    if (buttonsArr.includes(button)) {
      products.forEach((product) => {
        product.style.display = "block";
      });
      setButtonsArr([]);
      setIsClicked(false);
      return;
    }
    // buttonsArr.push(button);

    setIsClicked(true);
    setButtonsArr([...buttonsArr, button]);

    products.forEach((product) => {
      if (product.id !== button) {
        product.style.display = "none";
      } else {
        product.style.display = "block";
      }
    });
  };

  //}
  const { allCategories = [] } = props;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md p-4 flex flex-wrap justify-center gap-2 shadow-sm">
      {allCategories.map((category) => {
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
  );
}

export default CategoryBtn;

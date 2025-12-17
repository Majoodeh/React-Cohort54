import React from "react";

function CategoryBtn(props) {
  // onClick:
  let isClicked = false;
  let buttunsArr = [];
  const buttonClick = (event) => {
    const button = event.target.id;
    const products = document.querySelectorAll(".product-item");
    // console.log(products);

    // if pressed the same button twice
    if (buttunsArr.includes(button)) {
      products.forEach((product) => {
        product.style.display = "block";
      });
      buttunsArr = [];
      isClicked = false;
      return;
    }
    buttunsArr.push(button);
    console.log("button ++++", buttunsArr);
    isClicked = true;

    products.forEach((product) => {
      if (product.id !== button) {
        product.style.display = "none";
      } else {
        product.style.display = "block";
      }
    });

    console.log("isClicked status:", isClicked);
    console.log("Button clicked >> [", button, "]");
  };

  //
  const { allCategories = [] } = props;
  return (
    <div>
      {allCategories.map((category) => {
        return (
          <button
            id={category.replace("FAKE: ", "")}
            key={category}
            className="rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
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

import React from "react";
import { useEffect } from "react";

function Category() {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const getCategories = async () => {
      console.log("Fetching products...");
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to get products");
        }
        const data = await response.json();
        console.log("Data are", data);

        setCategories(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        return;
      }
    };
    getCategories();
  }, []);

  let isClicked = false;
  let buttonsArr = [];
  const buttonClick = (event) => {
    const button = event.target.id;
    const products = document.querySelectorAll(".product-item");
    console.log(products);

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
    console.log("button ++++", buttonsArr);
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

// function Category(props) {
//   // onClick:
//   let isClicked = false;
//   let buttonsArr = [];
//   const buttonClick = (event) => {
//     const button = event.target.id;
//     const products = document.querySelectorAll(".product-item");
//     // console.log(products);

//     // if pressed the same button twice
//     if (buttonsArr.includes(button)) {
//       products.forEach((product) => {
//         product.style.display = "block";
//       });
//       buttonsArr = [];
//       isClicked = false;
//       return;
//     }
//     buttonsArr.push(button);
//     console.log("button ++++", buttonsArr);
//     isClicked = true;

//     products.forEach((product) => {
//       if (product.id !== button) {
//         product.style.display = "none";
//       } else {
//         product.style.display = "block";
//       }
//     });

//     console.log("isClicked status:", isClicked);
//     console.log("Button clicked >> [", button, "]");
//   };

//   //
//   const { allCategories = [] } = props;
//   return (
//     <>
//       <div className=" pt-0 relative left-0 right-0  z-50 bg-white/80 backdrop-blur-md p-4 flex flex-wrap justify-center gap-2 shadow-sm ">
//         {allCategories.map((category) => {
//           return (
//             <button
//               id={category.replace("FAKE: ", "")}
//               key={category}
//               className="rounded-md bg-green-500 py-2 px-4 text-sm text-white hover:bg-green-700 transition-all"
//               type="button"
//               onClick={buttonClick}
//             >
//               {category.replace("FAKE: ", "")}
//             </button>
//           );
//         })}
//       </div>
//     </>
//   );
// }

export default Category;

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../components/Star.jsx";

function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  function starRating() {
    const rating = Math.round(product.rating.rate);
    console.log("rating", rating);

    let starsArray = [];
    let i = 1;

    while (i <= 5) {
      if (i <= rating) {
        starsArray.push(<Star key={i} color={"currentColor"} />);
      } else {
        starsArray.push(<Star key={i} color={"#d1d5db"} />);
      }

      i++;
    }

    return <>{starsArray}</>;
  }

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(
          `            https://fakestoreapi.com/products/${productId}
`
        );

        if (!response.ok) {
          throw new Error("Failed to get products");
        }
        const data = await response.json();

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getProductDetails();
  }, [productId]);

  if (loading || !product) {
    return (
      <div className="pt-40 pb-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        Products are loading...
      </div>
    );
  }
  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full dark:hidden" src={product.image} alt="" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.title.replace("Fake: ", "")}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {product.price}$
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">{starRating()}</div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  {product.rating.rate}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {product.rating.count} reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                className=" flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-green-500 rounded-lg border border-gray-200 hover:bg-green-400 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
                Add to favorites
              </a>

              <a
                href="#"
                title=""
                className=" flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-green-500 rounded-lg border border-gray-200 hover:bg-green-400 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
                Add to cart
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

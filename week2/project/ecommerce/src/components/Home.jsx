import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getProducts = async () => {
      console.log("Fetching products...");
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=50"
        );

        if (!response.ok) {
          throw new Error("Failed to get products");
        }
        const data = await response.json();
        console.log("Data are", data);

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="pt-40 pb-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        Products are loading...
      </div>
    );
  }

  return (
    <div className="pt-40 pb-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {products.map((product) => {
        return (
          <div
            id={product.category}
            key={product.id}
            className="product-item flex flex-col h-full bg-white border border-slate-200 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative h-48 m-2.5 overflow-hidden rounded-md flex justify-center items-center bg-gray-50">
              <img
                src={product.image}
                alt="card-image"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-4 flex-grow">
              <h6 className="mb-2 text-slate-800 text-lg font-semibold line-clamp-2">
                {product.title.replace("Fake: ", "")}
              </h6>
              <p className="text-slate-600 text-sm font-light line-clamp-3">
                {product.description}
              </p>
            </div>
            <div className="p-4 pt-0">
              <Link
                to={`/${product.id}`}
                className="block  text-center w-full rounded-md bg-green-500 py-2 text-sm text-white hover:bg-green-700 transition-all"
              >
                Buy Now
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

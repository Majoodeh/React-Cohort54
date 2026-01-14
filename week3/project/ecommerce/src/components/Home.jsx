import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchUrl from "./Hooks/useFetchUrl.js";
import Message from "./Message.jsx";

const URL = "https://fakestoreapi.com/products?limit=50";

export default function Home() {
  const { data, loading, error } = useFetchUrl(URL);

  if (loading) {
    return <Message message={"Products are loading..."} />;
  }

  if (error) {
    return <Message message={error} />;
  }
  console.log(data);

  return (
    <div className="pt-40 pb-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {data.map((item) => {
        return (
          <div
            id={item.category}
            key={item.id}
            className="product-item flex flex-col h-full bg-white border border-slate-200 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative h-48 m-2.5 overflow-hidden rounded-md flex justify-center items-center bg-gray-50">
              <img
                src={item.image}
                alt="card-image"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-4 flex-grow">
              <h6 className="mb-2 text-slate-800 text-lg font-semibold line-clamp-2">
                {item.title.replace("Fake: ", "")}
              </h6>
              <p className="text-slate-600 text-sm font-light line-clamp-3">
                {item.description}
              </p>
            </div>
            <div className="p-4 pt-0">
              <Link
                to={`/${item.id}`}
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

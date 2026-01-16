import React, { useEffect, useState, useContext } from "react";
import useFetchUrl from "./Hooks/useFetchUrl.js";
import Message from "./Message.jsx";
import ProductCard from "./ProductCard.jsx";

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
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

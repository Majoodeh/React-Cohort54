import React, { useContext } from "react";
import FavoritesContext, { FavoritesProvider } from "./FavoritesContext.jsx";
import { Link } from "react-router-dom";
import likeOnIcon from "../assets/heart-solid.svg";
import likeOffIcon from "../assets/heart-regular.svg";

function ProductCard({ item }) {
  const { favorites, switchFavorite } = useContext(FavoritesContext);
  const isProductFav = favorites.includes(item.id);

  return (
    <div
      data-category={item.category}
      id={item.id}
      key={item.id}
      className="product-item flex flex-col h-full bg-white border border-slate-200 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative h-48 m-2.5 overflow-hidden rounded-md flex justify-center items-center bg-gray-50">
        <img
          src={isProductFav ? likeOnIcon : likeOffIcon}
          alt="favorite-icon"
          className="w-6 h-6 absolute top-2 right-2 cursor-pointer z-10"
          onClick={() => switchFavorite(item.id)}
        />
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
}

export default ProductCard;

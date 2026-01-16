import React, { useContext, useMemo } from "react";
import useFetchUrl from "./Hooks/useFetchUrl.js";
import Message from "./Message.jsx";
import ProductCard from "./ProductCard.jsx";
import FavoritesContext from "./FavoritesContext.jsx";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  const favoritesUrls = useMemo(() => {
    return favorites.map((favoriteId) => {
      return `https://fakestoreapi.com/products/${favoriteId}`;
    });
  }, [favorites]);

  const { data, loading, error } = useFetchUrl(favoritesUrls);

  if (favorites.length === 0) {
    return <div>Favorites is empty</div>;
  }

  if (loading) {
    return <Message message={"Products are loading..."} />;
  }

  if (error) {
    return <Message message={error} />;
  }

  return (
    <div className="pt-40 pb-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FavoritesPage;

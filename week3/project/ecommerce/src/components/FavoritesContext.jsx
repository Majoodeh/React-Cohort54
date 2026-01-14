import { createContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  function switchFavorite(itemId) {
    if (favorites.includes(itemId)) {
      setFavorites((prev) =>
        prev.filter((favoriteId) => {
          return favoriteId !== itemId;
        })
      );
    } else {
      setFavorites([...favorites, itemId]);
    }
  }
  return (
    <FavoritesContext.Provider value={{ favorites, switchFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;

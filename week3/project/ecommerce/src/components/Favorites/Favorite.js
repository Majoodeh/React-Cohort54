import React, { useState } from "react";

function Favorite(e) {
  const [favorites, setFavorites] = useState([]);

  const targetId = e.target.id;

  function checkFavorites(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  checkFavorites(targetId);
}

export default Favorite;

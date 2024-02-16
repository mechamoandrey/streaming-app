import { useState } from "react";
import classnames from "classnames";

const useCard = ({ isBookmarked, category, trending }) => {
  const [isFavorite, setIsFavorite] = useState(isBookmarked);

  const toggleBookmark = () => setIsFavorite(!isFavorite);

  const categoryType = {
    title: category === "Movie" ? "Movie" : "TV Series",
    icon: category === "Movie" ? "movie" : "tv",
  };

  const colorBookmarkSVG = isFavorite ? "white" : "none";

  const cardClass = classnames("card", {
    ["card--trending"]: trending,
    ["card--bookmarked"]: isFavorite,
  });

  return {
    isFavorite,
    toggleBookmark,
    categoryType,
    colorBookmarkSVG,
    cardClass,
  };
};

export default useCard;

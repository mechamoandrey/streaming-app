import { useState } from "react";
import { MOVIES_DATA } from "@/data/data";

const useHome = ({ pageCategory }) => {
  const [searchValue, setSearchValue] = useState("");

  const listTypes = {
    all: {
      title: "Movies",
    },
    movie: {
      title: "Movies",
    },
    "tv-serie": {
      title: "TV Series",
    },
  };

  const isHome = pageCategory === "all";
  const isTrendingVisible = isHome && !searchValue;
  const trendingMovies = MOVIES_DATA.filter((movie) => movie.isTrending);
  const isSearched = searchValue.length > 0;

  const moviesList = () => {
    if (!isHome) {
      return MOVIES_DATA.filter((movie) =>
        movie.category
          .toLowerCase()
          .replaceAll(" ", "-")
          .includes(pageCategory.toLowerCase())
      );
    }

    return MOVIES_DATA;
  };

  const filterMovies = (movies) => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filteredMovies = isSearched ? filterMovies(moviesList()) : moviesList();

  return {
    filteredMovies,
    setSearchValue,
    trendingMovies,
    isTrendingVisible,
    cardListTitle: listTypes[pageCategory.replaceAll(" ", "-")].title,
  };
};

export default useHome;

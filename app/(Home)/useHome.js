import { useState } from "react";
import { MOVIES_DATA } from "./data";

const useHome = () => {
  const [searchValue, setSearchValue] = useState("");

  const trendingMovies = MOVIES_DATA.filter((movie) => movie.isTrending);

  const filteredMovies =
    searchValue.length > 0
      ? MOVIES_DATA.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : MOVIES_DATA;

  return {
    filteredMovies,
    setSearchValue,
    trendingMovies,
    isNotSearch: !searchValue,
  };
};

export default useHome;

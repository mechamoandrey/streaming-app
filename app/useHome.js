import { useState } from "react";
import { MOVIES_DATA } from "./data";

const useHome = () => {
  const [search, setSearch] = useState("");

  const filteredMovies =
    search.length > 0
      ? MOVIES_DATA.filter((movie) => movie.title.includes(search))
      : MOVIES_DATA;

  return {
    filteredMovies,
    setSearch,
  };
};

export default useHome;

import { useState } from "react";
import { MOVIES_DATA } from "@/data/data";

const useFavorites = () => {
  const [searchValue, setSearchValue] = useState("");

  const bookmarkedList = MOVIES_DATA.filter((movie) => movie.isBookmarked);

  const bookmarkedMovies = bookmarkedList.filter(
    (movie) => movie.category === "Movie"
  );
  const bookmarkedTvSeries = bookmarkedList.filter(
    (movie) => movie.category === "TV Series"
  );

  const isSearched = searchValue.length > 0;

  const filterMovies = (movies) => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filteredMovies = isSearched && filterMovies(bookmarkedList);

  const searchResultTitle = `Found ${filteredMovies.length} results for '${searchValue}'`;

  return {
    bookmarkedMovies,
    setSearchValue,
    bookmarkedTvSeries,
    filteredMovies,
    isSearched,
    searchResultTitle,
  };
};

export default useFavorites;

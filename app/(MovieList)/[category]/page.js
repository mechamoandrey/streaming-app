"use client";

import Search from "@/components/Search";
import CardList from "@/components/CardList";

import useMovieList from "./useHome";

export default function MovieList({ params }) {
  const {
    filteredMovies,
    setSearchValue,
    trendingMovies,
    isNotSearch,
    isHome,
  } = useMovieList({ pageCategory: params.category });

  const isTrendingVisible = isHome && isNotSearch;

  return (
    <>
      <Search
        placeholder="Search for movies or TV series"
        setSearchValue={setSearchValue}
      />

      {isTrendingVisible && (
        <CardList title="Trending" trending={true} moviesArr={trendingMovies} />
      )}

      <CardList title="Movies" moviesArr={filteredMovies} />
    </>
  );
}

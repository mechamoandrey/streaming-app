"use client";

import Search from "@/components/Search";
import CardList from "@/components/CardList";

import useMovieList from "./useHome";

export default function MovieList({ params }) {
  const {
    filteredMovies,
    setSearchValue,
    trendingMovies,
    cardListTitle,
    isTrendingVisible,
  } = useMovieList({ pageCategory: params.category });

  return (
    <>
      <Search
        placeholder="Search for movies or TV series"
        setSearchValue={setSearchValue}
      />

      {isTrendingVisible && (
        <CardList title="Trending" trending={true} moviesArr={trendingMovies} />
      )}

      <CardList title={cardListTitle} moviesArr={filteredMovies} />
    </>
  );
}

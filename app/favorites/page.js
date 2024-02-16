"use client";

import Search from "@/components/Search";
import CardList from "@/components/CardList";

import useFavorites from "./useFavorites";

import "./Favorites.scss";

export default function Favorites() {
  const {
    setSearchValue,
    bookmarkedMovies,
    bookmarkedTvSeries,
    isSearched,
    filteredMovies,
    searchResultTitle,
  } = useFavorites();

  return (
    <div className="favorites">
      <Search
        placeholder="Search for movies or TV series"
        setSearchValue={setSearchValue}
      />

      {isSearched ? (
        <CardList title={searchResultTitle} moviesArr={filteredMovies} />
      ) : (
        <>
          <CardList title="Bookmarked Movies" moviesArr={bookmarkedMovies} />

          <CardList
            title="Bookmarked TV Series"
            moviesArr={bookmarkedTvSeries}
          />
        </>
      )}
    </div>
  );
}

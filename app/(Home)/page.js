"use client";

import Header from "@/components/Header";
import CardList from "@/components/CardList";

import useHome from "./useHome";
import Search from "@/components/Search";

import "./Home.scss";

export default function Home() {
  const { filteredMovies, setSearchValue, trendingMovies, isNotSearch } =
    useHome();

  return (
    <section className="home">
      <Header />

      <main className="main">
        <Search
          placeholder="Search for movies or TV series"
          setSearchValue={setSearchValue}
        />

        {isNotSearch && (
          <CardList
            title="Trending"
            trending={true}
            moviesArr={trendingMovies}
          />
        )}

        <CardList title="Movies" moviesArr={filteredMovies} />
      </main>
    </section>
  );
}

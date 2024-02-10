"use client";

import Image from "next/image";
import Header from "@/components/Header";
import CardList from "@/components/CardList";
import Title from "@/components/Title";

import styles from "./Home.module.scss";
import useHome from "./useHome";

export default function Home() {
  const { filteredMovies, setSearch } = useHome();

  return (
    <section className={styles.home}>
      <Header />

      <main className={styles.main}>
        <div className={styles.searchContent}>
          <Image
            src="/assets/icons/icon-search.svg"
            width={24}
            height={24}
            alt="Icon Search"
            aria-hidden="true"
          />

          <input
            className={styles.input}
            name="search"
            placeholder="Search for movies or TV series"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Title title="Movies" />
        <CardList moviesArr={filteredMovies} />
      </main>
    </section>
  );
}

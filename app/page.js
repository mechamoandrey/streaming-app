import Header from "@/components/Header";
import CardList from "@/components/CardList";
import { MOVIES_DATA } from "./data";

export default function Home() {
  return (
    <section>
      <Header />

      <main>
        <CardList moviesArr={MOVIES_DATA} />
      </main>
    </section>
  );
}

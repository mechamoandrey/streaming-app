import CardList from "@/components/CardList";
import { data } from "./data";

export default function Home() {
  return <CardList moviesArr={data} />;
}

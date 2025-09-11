import AnimeHeader from "../animes/header";
import Footer from "../animes/footer";
import AnimeList from "../animes/animeList";

export default function MainPage() {
  console.log(AnimeHeader);
  return (
    <div>
      <AnimeHeader />
      <AnimeList />
      <Footer />
    </div>
  );
}

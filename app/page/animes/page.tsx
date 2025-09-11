import AnimeHeader from "../animes/header";
import Footer from "../animes/footer";
import AnimeList from "../animes/animeList";
import Link from "next/link";
import { Button } from "antd";

export default function MainPage() {
  console.log(AnimeHeader);
  return (
    <div>
      <AnimeHeader />
      <AnimeList />
      <div style={{ textAlign: "center", margin: "24px 0" }}>
        <Link href="/page/animes/strawHats" passHref>
          <Button type="primary" size="large">
            View Straw Hat Crew
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";

type Anime = {
  title: string;
  rating: number;
  arc: string;
  image: string;
};

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    async function fetchAnimes() {
      const res = await fetch("https://api.jikan.moe/v4/top/anime"); // your API route
      const data = await res.json();
      setAnimeList(data.data || []);
    }

    fetchAnimes();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#1d1427",
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <Row gutter={[45, 45]}>
          {animeList.map((anime, index) => (
            <Col
              key={`${anime.title}-${index}`} // Use index to avoid duplicate keys
              xs={24} // 1 per row on mobile
              sm={12} // 2 per row on tablet
              md={8} // 3 per row on desktop
            >
              <Card
                title={anime.title}
                cover={
                  <img
                    alt={anime.title}
                    src={anime.image}
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                }
                hoverable
                style={{ padding: "20px" }} // Add padding inside card
              >
                <p>
                  Rating: <strong>{anime.rating}</strong>
                </p>
                <p>Arc: {anime.arc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

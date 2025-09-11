export async function GET() {
  const animeList = [
    {
      id: 1,
      title: "One Piece",
      rating: 9.1,
      arc: "Egghead Arc",
      image: "/images/one-piece.jpg",
    },
    {
      id: 2,
      title: "Attack on Titan",
      rating: 9.0,
      arc: "Final Season",
      image: "/images/attack-on-titan.jpg",
    },
    {
      id: 3,
      title: "Demon Slayer",
      rating: 8.8,
      arc: "Hashira Training Arc",
      image: "/images/demon-slayer.jpg",
    },
  ];

  return new Response(JSON.stringify({ animes: animeList }), {
    headers: { "Content-Type": "application/json" },
  });
}

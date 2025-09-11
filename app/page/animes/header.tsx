"use client";
import Layout from 'antd/es/layout';
import Typography from 'antd/es/typography';

const { Header } = Layout;
const { Title, Text } = Typography;

export default function AnimeHeader() {
    console.log(Layout, Typography);
  return (
    <Header
      style={{
        minHeight: 300,
        background: "#1d1427",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <img
        src="/images/one-piece.jpg"
        alt="One Piece Hero"
        style={{
          width: "80%",
          maxWidth: 560,
          borderRadius: 16,
          marginBottom: 28,
          objectFit: "cover",
        }}
      />
      <Title
        level={1}
        style={{
          color: "#f8c013",
          fontWeight: "bold",
          textShadow: "0 2px 8px #2227",
          marginBottom: 6,
        }}
      >
        Anime Showcase
      </Title>
      <Text style={{ color: "#fff", fontSize: 20, fontStyle: "italic" }}>
        Discover legendary arcs and current favorites!
      </Text>
    </Header>
  );
}

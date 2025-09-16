"use client";

import { Layout, Row, Col } from "antd";
import Sidebar from "../location/sidebar";
import LocationCard from "../location/cards";
import AddLocationCard from "../location/addLocation";
import { Avatar } from "antd";

const { Sider, Header, Content } = Layout;

const locations = [
  {
    name: "ARC Spaces Wellington",
    image: "/images/download.jpeg",
    address: "Wellington Central, Wellington",
    clients: 26,
    visitors: 123,
    bookings: 39,
    tickets: 12,
    users: [
      { src: "/images/user.png", name: "John Doe" },
      { src: "/images/user.png", name: "Jane Smith" },
      { src: "/images/user.png", name: "Courtney Henry" },
    ],
  },
  {
    name: "ARC Spaces Auckland",
    image: "/images/download.jpeg",
    address: "Parnell, Auckland",
    clients: 39,
    visitors: 145,
    bookings: 35,
    tickets: 3,
    users: [
      { src: "/images/user.png", name: "John Doe" },
      { src: "/images/user.png", name: "Jane Smith" },
      { src: "/images/user.png", name: "Courtney Henry" },
    ],
  },
  {
    name: "ARC Spaces Christchurch",
    image: "/images/download.jpeg",
    address: "Riccarton, Christchurch",
    clients: "_",
    visitors: "_",
    bookings: "_",
    tickets: "_",
    users: [
      { src: "/images/user.png", name: "John Doe" },
      { src: "/images/user.png", name: "Jane Smith" },
      { src: "/images/user.png", name: "Courtney Henry" },
    ],
  },
];

export default function MainPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={220} style={{ background: "#fff" }}>
        <Sidebar />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            // display: "flex",
            alignItems: "right",
            justifyContent: "space-between",
            padding: "0 32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontWeight: 700 }}>Hello, John Doe</div>
            <Avatar src="/images/user.png" size={40} />
          </div>
        </Header>
        <Content style={{ padding: 40, background: "#f7f9fa" }}>
          <Row gutter={[16, 16]}>
            {locations.map((loc) => (
              <Col xs={24} md={12} xl={12} key={loc.name}>
                <LocationCard {...loc} />
              </Col>
            ))}
            <Col xs={24} md={12} xl={12}>
              <AddLocationCard />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

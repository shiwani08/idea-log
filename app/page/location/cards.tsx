"use client";

import { Card, Avatar, Button } from "antd";

type LocationProps = {
  name: string;
  image: string;
  address: string;
  clients: number | string;
  visitors: number | string;
  bookings: number | string;
  tickets: number | string;
  users: { src: string; name: string }[];
  minimal?: boolean; // Optional flag for minimal display
};

// Helper function moved inside component file (can be used externally as well)
function isMinimalCard(loc: LocationProps) {
  return (
    !loc.clients || loc.clients === "_" || loc.clients === 0 ||
    !loc.visitors || loc.visitors === "_" || loc.visitors === 0 ||
    !loc.bookings || loc.bookings === "_" || loc.bookings === 0 ||
    !loc.tickets || loc.tickets === "_" || loc.tickets === 0
  );
}

export default function LocationCard(props: LocationProps) {
  // Determine minimal display automatically if minimal not passed
  const minimal = props.minimal ?? isMinimalCard(props);

  return (
    <Card
      style={{
        borderRadius: 18,
        minHeight: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      cover={
        <img src={props.image} style={{ height: 180, objectFit: "cover" }} alt={props.name} />
      }
    >
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <Avatar.Group>
          {props.users.map((user) => (
            <Avatar key={user.name} src={user.src} />
          ))}
        </Avatar.Group>
      </div>
      <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 2 }}>{props.name}</div>
      <div style={{ color: "#888", marginBottom: 6 }}>{props.address}</div>

      {minimal ? (
        <>
          <div>👥 _</div>
          <div>📅 _</div>
          <div>📋 _</div>
        </>
      ) : (
        <>
          <div>
            👥 {props.clients} Clients | {props.visitors} Visitors
          </div>
          <div>📅 {props.bookings} Upcoming Bookings</div>
          <div>📋 {props.tickets} Open Tickets</div>
        </>
      )}

      <Button
        type="primary"
        style={{ background: "#ffc285", border: "none", width: "100%", marginTop: 14 }}
      >
        Location Dashboard
      </Button>
    </Card>
  );
}

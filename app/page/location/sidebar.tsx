"use client";

import { Menu, Tag } from "antd";

const menuItems = [
  { key: "1", label: "Locations" },
  { key: "2", label: "Spaces" },
  { key: "3", label: "Plans" },
  { key: "4", label: "Clients" },
  { key: "5", label: "Management" },
];

export default function Sidebar() {
  return (
    <aside style={{ width: 220, background: "#fff" }}>
      <div style={{ padding: 24, fontWeight: 700, fontSize: 22 }}>
        Simplified <Tag color="orange">SPACES</Tag>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
    </aside>
  );
}

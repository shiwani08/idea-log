"use client";

import { Card, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function AddLocationCard() {
  return (
    <Card
      style={{
        minHeight: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #ffcd00",
        background: "#fff9e5"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: 18 }}>Opening a new location?</div>
        <Button
          type="primary"
          icon={<HomeOutlined />}
          size="large"
          style={{ background: "#ffcd00", color: "#000", border: "none" }}
        >
          Add Location
        </Button>
      </div>
    </Card>
  );
}

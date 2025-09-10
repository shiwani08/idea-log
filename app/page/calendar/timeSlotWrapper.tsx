"use client";

import React from "react";
import { EventType } from "./page";
import { PlusOutlined } from "@ant-design/icons";

interface TimeSlotWrapperProps {
  value: Date;
  children: React.ReactNode;
  openModal: (slotTime: Date) => void;
  events: EventType[];
}

const TimeSlotWrapper: React.FC<TimeSlotWrapperProps> = ({
  value,
  children,
  openModal,
  events,
}) => {
  const isGridSlot = React.isValidElement(children);

  // Check if the slot time overlaps any existing event
  const isSlotBusy = events.some(
    (evt) => value >= evt.start && value < evt.end
  );

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
  {children}

  {isGridSlot && !isSlotBusy && (
    <button
      onClick={() => openModal(value)}
      aria-label="Add event"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        color: "#444",
        fontSize: 22,
        cursor: "pointer",
        zIndex: 5,
      }}
    >
      <PlusOutlined />
    </button>
  )}
</div>

  );
};

export default TimeSlotWrapper;

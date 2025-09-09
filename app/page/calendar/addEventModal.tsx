"use client";

import React, { useState } from "react";

interface AddEventModalProps {
  onAdd: (evt: {
    title: string;
    location: string;
    workspace: string;
    start: Date;
    end: Date;
  }) => void;
  onClose: () => void;
}

const LOCATIONS = [
  "Wellington Central, Wellington",
  "Auckland Downtown, Auckland",
];

const WORKSPACES = ["Conference Room #1", "Conference Room #2"];

const AddEventModal: React.FC<AddEventModalProps> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [workspace, setWorkspace] = useState(WORKSPACES[0]);
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function submit() {
    if (!title || !location || !workspace || !date || !start || !end) {
      alert("Please fill all fields");
      return;
    }
    const startDate = new Date(`${date}T${start}`);
    const endDate = new Date(`${date}T${end}`);
    onAdd({
      title,
      location,
      workspace,
      start: startDate,
      end: endDate,
    });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ fontFamily: "inherit", backgroundColor: "rgba(0,0,0,0.2)" }}
    >
      {/* Modal container as flex column */}
      <div className="bg-white rounded shadow-md p-6 min-w-[350px] w-[550px] flex flex-col max-h-[85vh]">
        {/* Header & Steps */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Create Workspace Booking</h2>
          <button aria-label="Close" className="text-xl" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="flex items-center text-sm mb-3">
          <span className="font-semibold text-orange-500">1 Workspace</span>
          <span className="mx-2 text-gray-400">—</span>
          <span>2 Invitees</span>
          <span className="mx-2 text-gray-400">—</span>
          <span>3 Payment</span>
        </div>

        {/* Form content grows to fill space */}
        <div className="flex-grow overflow-auto">
          <label className="block mb-1 font-medium">Booking Title</label>
          <input
            type="text"
            placeholder="Booking Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-3"
          />

          <label className="block mb-1 font-medium">Location *</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-3"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <label className="block mb-1 font-medium">Workspace *</label>
          <select
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-3"
          >
            {WORKSPACES.map((ws) => (
              <option key={ws} value={ws}>
                {ws}
              </option>
            ))}
          </select>

          <label className="block mb-1 font-medium">Booking Date *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-3"
          />

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Start Time</label>
              <input
                type="time"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-3"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">End Time</label>
              <input
                type="time"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-3"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons with spacing and alignment */}
        <div className="flex justify-between mt-4">
          <button className="w-36 h-10 px-3 py-2 border rounded text-gray-500 hover:bg-gray-100">
            Change Booking Type
          </button>
          <div className="flex space-x-2">
            <button
              onClick={() => onClose()}
              className="w-36 h-10 px-3 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={submit}
              className="w-36 h-10 px-4 py-2 bg-orange-500 text-white rounded font-medium hover:bg-orange-600"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;

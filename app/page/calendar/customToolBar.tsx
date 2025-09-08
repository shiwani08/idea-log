"use client";

import React from "react";
import clsx from "clsx";
import { FaSearch, FaRegCalendarAlt } from "react-icons/fa";

interface CustomToolbarProps {
  label: string;
  onNavigate: (action: "TODAY" | "PREV" | "NEXT") => void;
  onView: (view: string) => void;
  views: string[];
  view: string;
  date: string;
  setDate: (date: string) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  label,
  onNavigate,
  onView,
  views,
  view,
  date,
  setDate,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="flex items-center w-full px-2 py-3 bg-white border-b">
      {/* Segmented Control */}
      <div
        role="group"
        aria-label="Calendar View Segments"
        className="inline-flex border rounded overflow-hidden"
      >
        {views.map((v, idx) => {
          const isActive = view === v;
          return (
            <button
              key={v}
              onClick={() => onView(v)}
              className={`
    px-4 py-1 font-medium transition-all
    ${
      isActive
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-white text-gray-700"
    }
    ${idx === 0 ? "rounded-l" : ""}
    ${idx === views.length - 1 ? "rounded-r" : ""}
    ${idx !== 0 ? "border-l border-gray-200" : ""}
    hover:bg-gray-100
  `}
              aria-pressed={isActive}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Date Picker Input */}
      <div className="ml-2 flex items-center border rounded px-3 py-1 bg-white focus-within:border-orange-500">
        <label htmlFor="calendar-date" className="sr-only">
          Select date
        </label>
        <input
          id="calendar-date"
          type="text"
          value={label}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none text-gray-900 bg-transparent"
        />
        <FaRegCalendarAlt className="ml-2 text-gray-400" />
      </div>

      {/* Navigation Arrows */}
      <div className="ml-2 flex items-center border rounded px-1 py-1 bg-white">
        <button
          onClick={() => onNavigate("PREV")}
          className="px-2 py-1 hover:bg-gray-100 rounded"
          aria-label="Go to previous date"
        >
          &lt;
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          className="px-2 py-1 hover:bg-gray-100 rounded"
          aria-label="Go to next date"
        >
          &gt;
        </button>
      </div>

      {/* Search Input */}
      <div className="ml-4 flex items-center border rounded px-2 py-1 bg-white">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="outline-none text-gray-900 bg-transparent"
          placeholder="Search"
          aria-label="Search calendar events"
        />
        <FaSearch className="ml-2 text-gray-400" />
      </div>

      {/* Section Links */}
      <div className="ml-auto flex items-center text-base font-medium">
        <span className="text-orange-500">Calendar</span>
        <span className="mx-2 text-gray-400">|</span>
        <span className="text-gray-500">Floor Plan</span>
      </div>
    </div>
  );
};

export default CustomToolbar;

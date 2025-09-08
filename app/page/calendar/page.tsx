"use client";

import Navbar from "../../components/navBar";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import LocationSideBar from "./location";
import { FaSearch, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";

// Locale setup
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
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
  date, // (add props as needed for current date, search, etc.)
  setDate, // function to set date
  searchValue,
  setSearchValue,
}) => {
  const [events, setEvents] = React.useState([
    {
      title: "Board Meeting",
      start: new Date(2025, 8, 10, 9, 0),
      end: new Date(2025, 8, 10, 13, 0),
    },
    {
      title: "Birthday Party",
      start: new Date(2025, 8, 15, 19, 0),
      end: new Date(2025, 8, 15, 22, 0),
    },
  ]);
  return (
    <div className="flex items-center w-full px-2 py-3 bg-white border-b">
      {/* Segmented Control */}
      <div className="inline-flex border rounded overflow-hidden">
        {views.map((v, idx) => {
          const isActive = view === v;
          return (
            <button
              key={v}
              onClick={() => onView(v)}
              className={`px-4 py-1 font-medium transition-all
                ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700"
                }
                ${idx === 0 ? "rounded-l border-r" : ""}
                ${idx === views.length - 1 ? "rounded-r" : ""}
                ${idx !== 0 && idx !== views.length - 1 ? "border-r" : ""}
                border-none
                ${!isActive ? "hover:bg-gray-100" : ""}
              `}
              aria-selected={isActive}
              style={{ borderLeft: idx !== 0 ? "1px solid #ececec" : "none" }}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Date Picker Input */}
      <div className="ml-2 flex items-center border rounded px-3 py-1 bg-white focus-within:border-orange-500">
        <input
          type="text"
          value={label} // Typically label is the date string; replace as needed
          onChange={(e) => setDate(e.target.value)}
          className="outline-none text-gray-900 bg-transparent"
        />
        <FaRegCalendarAlt className="ml-2 text-gray-400" />
      </div>

      {/* Navigation Arrows */}
      <div className="ml-2 flex items-center border rounded bg-white">
        <button
          onClick={() => onNavigate("PREV")}
          className="px-2 py-1 hover:bg-gray-100 rounded"
        >
          &lt;
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          className="px-2 py-1 hover:bg-gray-100 rounded"
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

const MyCalendar: React.FC = () => {
  const events = [
    {
      title: "Board Meeting",
      start: new Date(2025, 8, 10, 9, 0),
      end: new Date(2025, 8, 10, 13, 0),
    },
    {
      title: "Birthday Party",
      start: new Date(2025, 8, 15, 19, 0),
      end: new Date(2025, 8, 15, 22, 0),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4 rounded-lg shadow overflow-x-hidden">
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 border-r p-4 bg-gray-50">
          <LocationSideBar />
        </aside>

        {/* Right Section */}
        <div className="flex-1 p-4">
          {/* Heading with icons */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif text-orange-500">
              Booking Calendar
            </h2>
            <div className="flex space-x-3">
              {/* You can add icons here if needed */}
            </div>
          </div>

          {/* Calendar */}
          <div className="w-full max-w-full">
            <Calendar
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "80vh" }}
              views={["day", "week", "month"]}
              defaultView="day"
              events={events}
              components={{
                toolbar: CustomToolbar, // Use custom toolbar
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;

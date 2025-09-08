"use client";

import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, ToolbarProps } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import LocationSideBar from "./location";
import { FaSearch, FaRegCalendarAlt } from "react-icons/fa";
import AddEventModal from "./addEventModal";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

interface EventType {
  title: string;
  start: Date;
  end: Date;
}

interface ExtendedToolbarProps extends ToolbarProps {
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  date: Date;
  setDate: (date: Date) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

// Modal component to add event
// const AddEventModal: React.FC<{
//   onAdd: (evt: EventType) => void;
//   onClose: () => void;
// }> = ({ onAdd, onClose }) => {
//   const [title, setTitle] = useState("");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");

//   const submit = () => {
//     if (!title || !start || !end) return alert("Please fill all fields");
//     onAdd({
//       title,
//       start: new Date(start),
//       end: new Date(end),
//     });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-lg mb-4 font-semibold">Add New Event</h2>
//         <input
//           type="text"
//           placeholder="Event Title"
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           className="border p-2 w-full mb-3"
//         />
//         <label className="block mb-1">Start Time</label>
//         <input
//           type="datetime-local"
//           value={start}
//           onChange={e => setStart(e.target.value)}
//           className="border p-2 w-full mb-3"
//         />
//         <label className="block mb-1">End Time</label>
//         <input
//           type="datetime-local"
//           value={end}
//           onChange={e => setEnd(e.target.value)}
//           className="border p-2 w-full mb-4"
//         />
//         <div className="flex justify-end space-x-3">
//           <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
//           <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
//         </div>
//       </div>
//     </div>
//   );
// };

const CustomToolbar: React.FC<ExtendedToolbarProps> = ({
  label,
  onNavigate,
  views,
  view,
  onView,
  date,
  setDate,
  searchValue,
  setSearchValue,
  events,
  setEvents,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleAddEvent = (event: EventType) => {
    setEvents([...events, event]);
  };

  return (
    <>
      <div className="height-auto flex items-center w-full px-2 py-3 bg-white border-b">
        {/* Segmented Control */}
        <div className="inline-flex border rounded overflow-hidden">
          {views.map((v, idx) => {
            const isActive = view === v;
            return (
              <button
                key={v}
                onClick={() => onView(v)}
                className={`px-4 py-1 font-medium transition-all ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700"
                } ${idx === 0 ? "rounded-l border-r" : ""} ${
                  idx === views.length - 1 ? "rounded-r" : ""
                } ${
                  idx !== 0 ? "border-l border-gray-200" : ""
                } hover:bg-gray-100 `}
                aria-selected={isActive}
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
            value={label}
            onChange={(e) => setDate(e.target.valueAsDate ?? date)}
            className="outline-none text-gray-900 bg-transparent"
            aria-label="Selected date"
          />
          <FaRegCalendarAlt className="ml-2 text-gray-400" />
        </div>

        {/* Navigation Arrows */}
        <div className="ml-2 flex items-center border rounded bg-white">
          <button
            onClick={() => onNavigate("PREV")}
            className="px-2 py-1 hover:bg-gray-100 rounded"
            aria-label="Go to previous"
          >
            &lt;
          </button>
          <button
            onClick={() => onNavigate("NEXT")}
            className="px-2 py-1 hover:bg-gray-100 rounded"
            aria-label="Go to next"
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
            aria-label="Search events"
          />
          <FaSearch className="ml-2 text-gray-400" />
        </div>

        {/* Add Event Button */}
        <button
          onClick={() => setShowModal(true)}
          className="ml-4 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          aria-label="Add new event"
        >
          + Add Event
        </button>

        {/* Section Links */}
        <div className="ml-auto flex items-center text-base font-medium">
          <span className="text-orange-500">Calendar</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-500">Floor Plan</span>
        </div>
      </div>
      {showModal && (
        <AddEventModal
          onAdd={handleAddEvent}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>(() => {
    const saved = localStorage.getItem("calendar-events");
    if (saved) {
      const parsed: EventType[] = JSON.parse(saved).map((evt: any) => ({
        ...evt,
        start: new Date(evt.start),
        end: new Date(evt.end),
      }));
      return parsed;
    }
    return [
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
      {
        title: "Meeting time slot",
        start: new Date(2025, 8, 16, 19, 0),
        end: new Date(2025, 8, 16, 22, 0),
      },
    ];
  });
  const [showModal, setShowModal] = useState(false);

  const handleAddEvent = (evt: EventType) => {
    setEvents(prev => [...prev, evt]);
  };
  
  React.useEffect(() => {
    localStorage.setItem("calendar-events", JSON.stringify(events));
  }, [events]);

  const [date, setDate] = useState(new Date());
  const [searchValue, setSearchValue] = useState("");

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
            <div className="flex space-x-3">{/* icons here if needed */}</div>
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
                toolbar: (props) => (
                  <CustomToolbar
                    {...props}
                    events={events}
                    setEvents={setEvents}
                    date={date}
                    setDate={setDate}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;

"use client";

import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import LocationSideBar from "./location";
import AddEventModal from "./addEventModal";
import CustomToolbar from "./customToolBar";
import TimeSlotWrapper from "./timeSlotWrapper";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

export interface EventType {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>(() => {
    const saved = localStorage.getItem("calendar-events");
    if (saved) {
      return JSON.parse(saved).map((evt: any) => ({
        ...evt,
        start: new Date(evt.start),
        end: new Date(evt.end),
      }));
    }
    return [];
  });

  const [showModal, setShowModal] = useState(false);
  const [modalSlotTime, setModalSlotTime] = useState<Date | null>(null);
  const [date, setDate] = useState(new Date());
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => {
    localStorage.setItem("calendar-events", JSON.stringify(events));
  }, [events]);

  // Called by TimeSlotWrapper when "+" is clicked
  const handleOpenModal = (slotTime: Date) => {
    setModalSlotTime(slotTime);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalSlotTime(null);
  };

  const handleAddEvent = (evt: EventType) => {
    setEvents(prev => [...prev, evt]);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 rounded-lg shadow overflow-x-hidden">
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 border-r p-4 bg-gray-50">
          <LocationSideBar />
        </aside>

        {/* Right Section */}
        <div className="flex-1 p-4">
          {/* Heading */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif text-orange-500">
              Booking Calendar
            </h2>
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
              formats={{
                timeGutterFormat: (date, culture, localizer) =>
                  localizer.format(date, "h a", culture),
              }}
              components={{
                timeSlotWrapper: (props) => (
                  <TimeSlotWrapper {...props} openModal={handleOpenModal} events={events || []} />
                ),
                toolbar: (props) => (
                  <CustomToolbar
                    {...props}
                    events={events}
                    setEvents={setEvents}
                    date={date}
                    setDate={setDate}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    openModal={handleOpenModal}
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <AddEventModal
          slotTime={modalSlotTime}
          onAdd={handleAddEvent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MyCalendar;

import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calendar.css";

function Calendar({ meetups, onDateSelect }) {
  const datesArray = meetups.map((meetup) => new Date(meetup.date));

  const handleDateClick = (date) => {
    onDateSelect(date); // Notify the parent about the clicked date
  };

  return (
    <div className="w-full flex justify-center">
      <DayPicker
        mode="single"
        selected={null}
        showOutsideDays={false}
        defaultMonth={new Date(2025, 0)} // January 2025
        modifiers={{
          selectedDates: datesArray,
        }}
        modifiersClassNames={{
          selectedDates: "bg-blue-500 text-white rounded-lg", // Highlight with blue
        }}
        className="one-row-calendar w-[500px] h-[450px]" // Adjust width and height
        onDayClick={handleDateClick} // Handle the date click event
        components={{
          Row: ({ dates }) => (
            <div className="flex justify-start gap-4">
              {dates.map((date, index) =>
                datesArray.some(
                  (d) => d.toDateString() === date.toDateString()
                ) ? (
                  <div
                    key={index}
                    className="!bg-green-500 text-white p-4 rounded-lg text-center text-sm"
                  >
                    {date.toLocaleDateString()}
                  </div>
                ) : null
              )}
            </div>
          ),
        }}
      />
    </div>
  );
}

export default Calendar;

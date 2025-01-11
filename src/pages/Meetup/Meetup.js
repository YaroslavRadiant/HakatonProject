import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function CalendarWithSpecificDates() {
  const datesArray = [
    new Date(2025, 0, 15),
    new Date(2025, 0, 20),
    new Date(2025, 0, 25),
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Выбранные даты:
        </h3>
        <DayPicker
          mode="single"
          selected={null}
          showOutsideDays={false}
          defaultMonth={new Date(2025, 0)}
          modifiers={{
            selectedDates: datesArray,
          }}
          modifiersClassNames={{
            selectedDates: "bg-blue-500 text-white rounded-lg",
          }}
          className="one-row-calendar"
          components={{
            Row: ({ dates }) => (
              <div className="flex justify-start gap-2">
                {dates.map((date, index) =>
                  datesArray.some(
                    (d) => d.toDateString() === date.toDateString()
                  ) ? (
                    <div
                      key={index}
                      className="bg-blue-500 text-white p-2 rounded-lg text-center text-sm"
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
    </div>
  );
}

export default CalendarWithSpecificDates;

import React from "react";

function Recent({ meetups }) {
  const recentMeetups = meetups.slice(-4);

  return (
    <div className="flex gap-4 ">
      {recentMeetups.map((meetup, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-4 rounded-lg shadow-md w-1/4"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {meetup.title}
          </h3>
          <p className="text-gray-600">{meetup.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Recent;

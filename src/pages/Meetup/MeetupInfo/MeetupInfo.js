import React from "react";

function MeetupInfo({ meetup }) {
  if (!meetup) {
    return <div>Виберіть день...</div>;
  }

  if (meetup.message) {
    return <div>{meetup.message}</div>;
  }

  return (
    <div className="max-w-3xl h-[100%] mx-auto p-3 bg-green-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        {meetup.title}
      </h1>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Дата:</strong> {meetup.date}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Час:</strong> {meetup.time}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Місце:</strong> {meetup.location}
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Організатор:</strong> {meetup.organizer}
      </p>
      <p className="text-lg text-gray-700 mb-6">
        <strong>Опис:</strong> {meetup.description}
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Відсутні учасники:
      </h2>
      <ul className="list-disc pl-5 text-gray-700 mb-6 max-h-[100px] overflow-y-scroll">
        {meetup.absentParticipants.map((participant, index) => (
          <li key={index} className="mb-2">
            <strong>{participant.name}:</strong> {participant.reason}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Доповідачі та теми:
      </h2>

      <ul className="list-disc pl-5 text-gray-700 max-h-[100px] overflow-y-scroll">
        {meetup.speakers.map((speaker, index) => (
          <li key={index} className="mb-2">
            <strong>{speaker.name}:</strong> {speaker.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetupInfo;

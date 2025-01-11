import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import "./Meetup.css";
import Calendar from "./Calendar/Calendar";
import MeetupInfo from "./MeetupInfo/MeetupInfo";
import Recent from "./Recent/Recent";

const meetups = [
  {
    title: "Технології майбутнього: штучний інтелект у повсякденному житті",
    date: "2025-01-10",
    time: "18:00 - 20:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description: "Мітап на тему штучного інтелекту",
    absentParticipants: [
      { name: "Іван Коваленко", reason: "Відсутній через робочі обов'язки." },
      { name: "Олена Тарасова", reason: "Відсутня через особисті обставини." },
      {
        name: "Андрій Мороз",
        reason: "Відсутній через участь в іншому заході.",
      },
    ],
    speakers: [
      {
        name: "Микола Шевченко",
        topic: "Як штучний інтелект змінює бізнес-процеси: реальні кейси",
      },
      {
        name: "Юлія Іванова",
        topic: "Штучний інтелект у медицині: можливості та етика",
      },
    ],
  },
  {
    title: "AI and the Future of Work",
    date: "2025-01-15",
    time: "17:00 - 19:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description: "Обговорення впливу штучного інтелекту на ринок праці.",
    absentParticipants: [
      { name: "Ірина Петрова", reason: "Відсутня через сімейні обставини." },
      { name: "Дмитро Козлов", reason: "Відсутній через відпустку." },
    ],
    speakers: [
      {
        name: "Тарас Коваль",
        topic: "Як AI змінює ринок праці і навчання.",
      },
    ],
  },
  {
    title: "Blockchain і його застосування в бізнесі",
    date: "2025-01-18",
    time: "19:00 - 21:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description:
      "Розгляд можливостей використання Blockchain в різних сферах бізнесу.",
    absentParticipants: [
      {
        name: "Марина Ярославська",
        reason: "Відсутня через особисті обставини.",
      },
    ],
    speakers: [
      {
        name: "Сергій Дмитрієв",
        topic: "Blockchain як інструмент для децентралізації бізнесу.",
      },
      {
        name: "Олена Левченко",
        topic: "Безпека в Blockchain технологіях.",
      },
    ],
  },
  {
    title: "AI and the Future of Work",
    date: "2025-01-15",
    time: "17:00 - 19:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description: "Обговорення впливу штучного інтелекту на ринок праці.",
    absentParticipants: [
      { name: "Ірина Петрова", reason: "Відсутня через сімейні обставини." },
      { name: "Дмитро Козлов", reason: "Відсутній через відпустку." },
    ],
    speakers: [
      {
        name: "Тарас Коваль",
        topic: "Як AI змінює ринок праці і навчання.",
      },
    ],
  },
  {
    title: "Blockchain і його застосування в бізнесі",
    date: "2025-01-18",
    time: "19:00 - 21:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description:
      "Розгляд можливостей використання Blockchain в різних сферах бізнесу.",
    absentParticipants: [
      {
        name: "Марина Ярославська",
        reason: "Відсутня через особисті обставини.",
      },
    ],
    speakers: [
      {
        name: "Сергій Дмитрієв",
        topic: "Blockchain як інструмент для децентралізації бізнесу.",
      },
      {
        name: "Олена Левченко",
        topic: "Безпека в Blockchain технологіях.",
      },
    ],
  },
  {
    title: "AI and the Future of Work",
    date: "2025-01-15",
    time: "17:00 - 19:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description: "Обговорення впливу штучного інтелекту на ринок праці.",
    absentParticipants: [
      { name: "Ірина Петрова", reason: "Відсутня через сімейні обставини." },
      { name: "Дмитро Козлов", reason: "Відсутній через відпустку." },
    ],
    speakers: [
      {
        name: "Тарас Коваль",
        topic: "Як AI змінює ринок праці і навчання.",
      },
    ],
  },
  {
    title: "Blockchain і його застосування в бізнесі",
    date: "2025-01-18",
    time: "19:00 - 21:00",
    location: "Онлайн-платформа (Zoom / Teams)",
    organizer: "TechFuture Community",
    description:
      "Розгляд можливостей використання Blockchain в різних сферах бізнесу.",
    absentParticipants: [
      {
        name: "Марина Ярославська",
        reason: "Відсутня через особисті обставини.",
      },
    ],
    speakers: [
      {
        name: "Сергій Дмитрієв",
        topic: "Blockchain як інструмент для децентралізації бізнесу.",
      },
      {
        name: "Олена Левченко",
        topic: "Безпека в Blockchain технологіях.",
      },
    ],
  },
];

function Meetup() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const meetup = meetups.find(
      (m) => new Date(m.date).toDateString() === date.toDateString()
    );
    setSelectedMeetup(meetup || { message: "Мітап на цей день не знайдено" });
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-[3]">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Meetup planner:
        </h3>
        <div className="h-[100%] flex w-screen">
          <div className="flex justify-center items-center flex-[3] bg-red-200 rounded-lg shadow-lg">
            <Calendar meetups={meetups} onDateSelect={handleDateSelect} />
          </div>
          <div className="flex-[1] ">
            <MeetupInfo meetup={selectedMeetup} />
          </div>
        </div>
      </div>
      <div className="flex[1] bg-gray-200 p-2">
        <Recent meetups={meetups} />
      </div>
    </div>
  );
}

export default Meetup;

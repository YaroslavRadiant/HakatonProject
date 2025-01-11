import React, { useState } from "react";

// Окремий елемент гармошки
const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b last:border-b-0">
    <button
      className="accordion-header text-blue-500 flex justify-between items-center w-full py-4"
      onClick={onToggle}
    >
      <span className="text-lg font-semibold">{title}</span>
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        &#8595; {/* Це стрілка вниз, яка буде обертатися */}
      </span>
    </button>
    {isOpen && (
      <div className="accordion-content p-4 text-gray-700">{content}</div>
    )}
  </div>
);

// Основний компонент гармошки
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

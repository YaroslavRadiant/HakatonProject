import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Окремий елемент гармошки
const AccordionItem = ({
  englishLevel,
  mainTech,
  name,
  techList,
  isOpen,
  onToggle,
}) => (
  <div className="border-b last:border-b-0">
    <button
      className="accordion-header text-blue-500 flex justify-between items-center w-full py-2"
      onClick={onToggle}
    >
      <span className="text-lg text-left font-semibold w-1/6">{name}</span>
      <span className="text-lg font-semibold w-1/6">{mainTech}</span>
      <span className="text-lg font-semibold w-1/6">{englishLevel}</span>
      <NavLink className="w-1/6" to={`/${name}/profile-page`}>
        Profile
      </NavLink>
      <NavLink className="w-1/6" to={`/${name}/carear-planing`}>
        {" "}
        Learning
      </NavLink>
      <span
        className={`transform transition-transform text-lg duration-300 w-1/6 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        &#8595; {/* Це стрілка вниз, яка буде обертатися */}
      </span>
    </button>
    {isOpen && (
      <div className="accordion-content p-2 flex flex-start text-gray-700">
        {techList.map((item, index) => (
          <span key={index} className="mr-2">
            {item[0]}: {item[1]}%;
          </span>
        ))}
      </div>
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
    <div className="w-full  mx-auto">
      <div className="border-b last:border-b-0">
        <div className="accordion-header text-blue-500 flex justify-between items-center w-full py-2">
          <span className="text-lg text-left font-semibold w-1/6">Name</span>
          <span className="text-lg font-semibold w-1/6">Main Tech</span>
          <span className="text-lg font-semibold w-1/6">English Level</span>
          <div className="w-1/6"></div>
          <div className="w-1/6"></div>
          <span className={` w-1/6 `}></span>
        </div>
      </div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          name={item.name}
          techList={item.techList}
          mainTech={item.mainTech}
          englishLevel={item.englishLevel}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

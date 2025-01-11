import React, { useState } from "react";
import Accordion from "./Accordion";
import FiltersBar from "./FiltersBar";

const userList = [
  {
    name: "User 1",
    mainTech: "React",
    englishLevel: "a0",
    techList: [
      ["React", 50],
      ["Angular", 70],
    ],
  },
  {
    name: "User 2",
    mainTech: "React",
    englishLevel: "a0",
    techList: [
      ["React", 23],
      ["Vue", 70],
    ],
  },
  {
    name: "User 3",
    mainTech: "React",
    englishLevel: "a0",
    techList: [["React", 44]],
  },
  {
    name: "User 4",
    mainTech: "React",
    englishLevel: "a0",
    techList: [["React", 100]],
  },
];

const UserList = () => {
  const [techFilter, setTechFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState(0);
  const filteredUserList = userList.filter((user) =>
    user.techList.some(
      (tech) =>
        (techFilter === "all" || tech.includes(techFilter)) &&
        tech[1] >= levelFilter
    )
  );
  return (
    <div className="container mx-auto p-4">
      <FiltersBar
        techFilter={techFilter}
        levelFilter={levelFilter}
        setTechFilter={setTechFilter}
        setLevelFilter={setLevelFilter}
      />
      <Accordion items={filteredUserList} />
    </div>
  );
};

export default UserList;

import React from "react";
import Accordion from "./Accordion";

const userList = [
  { title: "User 1", content: "React" },
  { title: "User 2", content: "React" },
  { title: "User 3", content: "React" },
  { title: "User 4", content: "React" },
];

const UserList = () => {
  return (
    <div className="container mx-auto p-4">
      <Accordion items={userList} />
    </div>
  );
};

export default UserList;

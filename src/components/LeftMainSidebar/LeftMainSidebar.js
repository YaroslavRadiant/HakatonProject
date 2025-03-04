import React from "react";
import { NavLink } from "react-router-dom";

const LeftMainSidebar = () => {
  return (
    <div className="w-[300px] h-[100vh] bg-slate-200 p-2">
      <div className="flex flex-col text-[30px]">
        <NavLink to={"/user-list"}>Workers</NavLink>
        <NavLink to={'/meetup'}>Meet-ups</NavLink>
      </div>
    </div>
  );
};

export default LeftMainSidebar;

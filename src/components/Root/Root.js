import React from "react";
import { Outlet } from "react-router-dom";
import LeftMainSidebar from "../LeftMainSidebar/LeftMainSidebar";

const Root = () => {
  return (
    <div className="flex w-full">
      <LeftMainSidebar />
      <Outlet />
    </div>
  );
};

export default Root;

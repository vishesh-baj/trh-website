import React from "react";

const DashboardListItem = ({ title, icon }) => {
  return (
    <li>
      <div
        aria-label="dashboard"
        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-rose-300 to-pink-600"
      >
        {/* <MdSpaceDashboard className="-ml-1" size={25} /> */}
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </div>
    </li>
  );
};

export default DashboardListItem;

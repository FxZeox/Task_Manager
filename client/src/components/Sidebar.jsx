import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation
  }, []);

  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Tasks", path: "/tasks" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`h-full bg-gray-100 shadow-lg transition-transform duration-500 ${
        isMounted ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6">
        <h2 className="text-gray-700 font-bold text-xl">Menu</h2>
        <ul className="mt-4 space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="block px-4 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

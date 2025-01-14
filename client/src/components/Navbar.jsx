import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header
      className={`w-full bg-white shadow-md p-4 flex items-center justify-between transition-transform duration-500 ${
        isMounted ? "translate-y-0" : "-translate-y-12"
      }`}
    >
      <h1 className="text-gray-700 font-extrabold text-2xl">
        Task Management
      </h1>
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-lg transition-all"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;

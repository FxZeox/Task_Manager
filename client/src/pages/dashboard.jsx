import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger fade-in effect on mount
  }, []);

  return (
    <div
      className={`flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg w-full h-full transition-opacity duration-500 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="w-full text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Manage your tasks efficiently and stay productive.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Task Statistics */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-bold">Total Tasks</h2>
          <p className="text-4xl font-extrabold mt-4">24</p>
          <p className="mt-2 text-sm">Completed 18, Remaining 6</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-teal-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-bold">Tasks Completed</h2>
          <p className="text-4xl font-extrabold mt-4">18</p>
          <p className="mt-2 text-sm">Great progress this week!</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-red-500 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-bold">Pending Tasks</h2>
          <p className="text-4xl font-extrabold mt-4">6</p>
          <p className="mt-2 text-sm">Stay focused to finish them.</p>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="w-full mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Tasks</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between">
              <span className="text-gray-800 font-medium">Design Homepage</span>
              <span className="text-blue-500 font-semibold">In Progress</span>
            </li>
            <li className="py-4 flex justify-between">
              <span className="text-gray-800 font-medium">Fix Login Bug</span>
              <span className="text-green-500 font-semibold">Completed</span>
            </li>
            <li className="py-4 flex justify-between">
              <span className="text-gray-800 font-medium">Setup CI/CD Pipeline</span>
              <span className="text-red-500 font-semibold">Pending</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

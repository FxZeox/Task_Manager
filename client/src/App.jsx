import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Layout() {
  const { user } = useSelector((state) => state.auth); // Check user authentication
  const location = useLocation();

  return user ? (
    <Navigate to="/log-in" state={{ from: location }} replace />
  ) : (
    <div className="w-full h-screen flex">
    {/* Sidebar */}
    <div className="w-1/5 h-screen bg-gray-800 sticky top-0 hidden md:block">
      <Sidebar />
    </div>

    {/* Main content */}
    <div className="flex-1 flex flex-col overflow-y-auto">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  </div>
  );
}

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <main className="w-full min-h-screen">
      <Routes>
        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route
            index
            path="/"
            element={<Navigate to={user ? "/dashboard" : "/log-in"} replace />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Public Routes */}
        <Route path="/log-in" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;

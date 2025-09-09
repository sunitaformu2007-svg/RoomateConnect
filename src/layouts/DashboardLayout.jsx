import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import ThemeToggle from "../layouts/ThemeToggle";
import toast from "react-hot-toast";

// Icons
import { FiHome, FiLogOut, FiPlusCircle, FiList } from "react-icons/fi";

const DashboardLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      toast.success("Logout successful");
      navigate("/login");
    });
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-200 px-4 lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="flex-1 text-lg font-semibold">Dashboard</div>
        </div>

        <main className="p-4">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 flex flex-col justify-between">

          {/* Top Section */}
          <div>
            {/* Profile */}
            <div className="mb-6 text-center">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
              <h3 className="text-sm font-semibold mt-2">{user?.displayName || "User"}</h3>
            </div>

            {/* Navigation Links */}
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <FiHome className="text-lg" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse-lists" className="flex items-center gap-2">
                <FiList className="text-lg" />
                Browse Lists
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-lists" className="flex items-center gap-2">
                <FiList className="text-lg" />
                My Lists
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-lists" className="flex items-center gap-2">
                <FiPlusCircle className="text-lg" />
                Add List
              </NavLink>
            </li>
          </div>

          {/* Bottom Section: Toggle + Logout */}
          <div className="space-y-2">
            <ThemeToggle />
            <button onClick={handleLogout} className="btn btn-sm btn-outline btn-error w-full flex items-center gap-2 justify-center">
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;

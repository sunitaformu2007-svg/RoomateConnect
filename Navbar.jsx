import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import ThemeToggle from "../layouts/ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout().then(() => {
      toast.success("User Logout Successful.");
      navigate("/login");
    });
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <li>
        <NavLink className="text-sm md:text-base" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-sm md:text-base" to="/browse-lists">
          Browse Lists
        </NavLink>
      </li>
      <li>
        <NavLink className="text-sm md:text-base" to="/about">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className="text-sm md:text-base" to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-200 text-base-content">
      <div className="navbar max-w-screen-xl mx-auto px-4 py-3 md:py-6">
        <div className="navbar-start">
          {/* Removed ThemeToggle from here */}

          <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-secondary font-bold normal-case text-lg md:text-xl pl-0">RoomMate</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>

        <div className="navbar-end z-10">
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="btn btn-ghost p-0 rounded-full"
                    aria-label="User menu toggle"
                  >
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={user?.photoURL}
                      alt={user?.displayName || "User"}
                    />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute right-0 mt-2 w-40 bg-base-100 border border-gray-300 rounded-md shadow-lg py-1 z-20">
                      <li>
                        <NavLink
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleLogout();
                            setDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
                {/* Moved ThemeToggle here */}
                <ThemeToggle />
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-secondary text-sm md:text-base px-3 py-1.5 md:px-6 md:py-2 rounded-full"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline btn-secondary text-sm md:text-base px-3 py-1.5 md:px-6 md:py-2 rounded-full"
                >
                  Register
                </NavLink>
                {/* And ThemeToggle for non-logged-in users */}
                <ThemeToggle />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

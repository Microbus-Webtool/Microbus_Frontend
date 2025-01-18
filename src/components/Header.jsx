import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MicroLogo from "../assets/logos/microbus-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-8 z-40 w-full">
      <nav className="px-4 lg:px-6 py-2.5 bg-white bg-opacity-70 backdrop-blur-md shadow-md dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <img src={MicroLogo} className="h-10 sm:h-12" alt="Microbus Logo" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                    location.pathname === "/"
                      ? "text-blue-600 dark:text-white"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className={`block py-2 pr-4 pl-3 lg:p-0 ${
                    location.pathname === "#about"
                      ? "text-blue-600 dark:text-white"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`block py-2 pr-4 pl-3 lg:p-0 ${
                    location.pathname === "/events"
                      ? "text-blue-600 dark:text-white"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className={`block py-2 pr-4 pl-3 lg:p-0 ${
                    location.pathname === "/workshops"
                      ? "text-blue-600 dark:text-white"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className={`block py-2 pr-4 pl-3 lg:p-0 ${
                    location.pathname === "/teams"
                      ? "text-blue-600 dark:text-white"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

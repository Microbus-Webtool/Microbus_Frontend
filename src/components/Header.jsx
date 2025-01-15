import React, { useState } from 'react';
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
    <div>
      <nav className="px-4 lg:px-6 py-2.5 bg-white shadow dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <img src={MicroLogo} className="h-10 sm:h-12" alt="Microbus Logo" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                    location.pathname === "/"
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "#about"
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/events"
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/workshops"
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/teams"
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-400"
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

import React from "react";

const Navigation = () => {
  return (
    <div className="w-full bg-gray-900 text-white p-4">
      <div className="flex flex-col md:flex-row container mx-auto justify-between items-center gap-5">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">Scope Markets Spotify</a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Browse
          </a>
          <a href="#" className="hover:text-gray-400">
            Radio
          </a>
          <a href="#" className="hover:text-gray-400">
            Library
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <input
            name="search"
            type="text"
            className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none"
            placeholder="Search..."
          />
          <svg
            className="absolute left-3 top-2 h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.15-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

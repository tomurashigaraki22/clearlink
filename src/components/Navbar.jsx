// Navbar.js
import React from "react";
import clearLinkLogo from "../assets/download.jpg"; // Replace with the actual path to your JPG file

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-2 border-gray-200 mt-5 px-4 py-2 rounded-full max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-2">
<path d="M20.2058 17.4779L24.1024 13.5813C24.1024 10.9094 23.4344 8.34871 22.2098 6.12207L13.1362 14.5276V28.4998H14.8619C20.9295 28.4998 25.8837 23.6012 25.8837 17.4779H20.2058Z" fill="#1570EF"/>
<path d="M6.17793 11.5219L2.28131 15.4185C2.28131 18.0905 2.9493 20.6511 4.17396 22.8777L13.2475 14.4722V0.5H11.5219C5.45427 0.5 0.5 5.39861 0.5 11.5219H6.17793Z" fill="#53B1FD"/>
</svg>

          <div className="text-black font-bold text-2xl">ClearLink</div>
        </div>
        <div className="flex space-x-4">
          <DropdownButton title="Products" />
          <DropdownButton title="Solutions" />
          <DropdownButton title="Resources" />
          <DropdownButton title="Pricing" />
        </div>
        <div className="flex space-x-4">
          <button className="text-black text-md border font-bold border-gray-400 px-2 rounded-full hover:bg-gray-200 transition">Talk to Sales</button>
          <button className="text-white bg-blue-500 font-bold border border-white px-4 py-2 rounded-full hover:bg-blue-300 transition">Sign up for free</button>
        </div>
      </div>
    </nav>
  );
}

const DropdownButton = ({ title }) => {
  return (
    <div className="relative group">
      <button className="text-gray-400 font-bold">{title}</button>
      <div className="absolute hidden bg-white rounded-lg p-2 mt-2 space-y-2 group-hover:block">
        <p className="text-gray-800">Dropdown Content</p>
        {/* Add more dropdown content here if needed */}
      </div>
    </div>
  );
}

export default Navbar;

// src/components/Header.jsx
import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={onNavigate?.home}>
        Viva<span className="text-black font-extrabold">Decor</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
        <button onClick={onNavigate?.home} className="hover:text-black">Home</button>
        <button onClick={onNavigate?.services} className="hover:text-black">Services</button>
        <button onClick={onNavigate?.contact} className="hover:text-black">Contact</button>
        <button onClick={onNavigate?.support} className="hover:text-black">Support</button>
      </nav>

      {/* Sign In Button */}
      <div>
        <a href="/signin">
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
            Sign In
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;

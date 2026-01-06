import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-gray-700 hover:text-yellow-400 transition";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-yellow-400 text-white font-bold px-3 py-1 rounded-lg">
            SM
          </div>
          <h1 className="text-xl font-bold text-gray-800">
            Shree <span className="text-yellow-400">Maheba</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </ul>

        {/* Desktop Button */}
        <NavLink
          to="/contact"
          className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full transition"
        >
          Get in Touch
        </NavLink>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col space-y-2 font-medium">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About Us</NavLink>
          <NavLink to="/product" onClick={() => setOpen(false)} className={linkClass}>Product</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact Us</NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-yellow-400 text-white py-2 rounded-full text-center"
          >
            Get in Touch
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

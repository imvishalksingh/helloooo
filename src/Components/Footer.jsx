import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Shri MAHEBA
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A leading mustard oil refinery producing high-quality edible oil
            for domestic and international markets. Trusted worldwide for
            consistent quality and reliable supply.
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            Exporting Quality Mustard Oil Worldwide
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-yellow-400">About Us</NavLink></li>
            <li><NavLink to="/product" className="hover:text-yellow-400">Products</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-yellow-400">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Info
          </h3>
          <div className="space-y-4 text-gray-600">
            <div className="flex gap-3 items-start">
              <FiMapPin className="text-yellow-400 mt-1" />
              <p>
               Pinahat Agra
                 283123
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <FiPhone className="text-yellow-400" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex gap-3 items-center">
              <FiMail className="text-yellow-400" />
              <p>exports@shrimehoba.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe to receive updates and export offers.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
     {/* Bottom Bar */}
<div className="border-t py-4 text-center text-gray-500 text-sm">
  © 2025 Shri MAHEBA Mustard Oil. All Rights Reserved.
</div>

<div className="pb-4 text-center text-gray-500 text-sm">
  Powered by{" "}
  <span className="font-semibold text-gray-700">
    Cyvanta Techquantum
  </span>{" "}
  |{" "}
  <a
    href="mailto:cyvantatechquantum@gmail.com"
    className="text-yellow-500 hover:underline"
  >
    cyvantatechquantum@gmail.com
  </a>
</div>

    </footer>
  );
};

export default Footer;

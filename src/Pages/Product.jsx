import React from "react";
import { NavLink } from "react-router-dom";
import productImg from "../assets/product.jpeg";

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Shree Maheba Mustard Oil
        </h2>

        <p className="text-gray-700 text-lg">
          Our Shree Maheba Mustard Oil is 100% pure, cold-pressed, and unrefined,
          retaining natural aroma and essential nutrients.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>100% Natural & Chemical-Free</li>
          <li>Grade-1 Quality Certified</li>
          <li>Rich Aroma & Nutrients</li>
          <li>Traditional Cold-Pressed Oil</li>
        </ul>

        {/* Buy Now Button → Contact Us */}
        <NavLink
          to="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Buy Now
        </NavLink>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={productImg}
          alt="Shree Mehoba Mustard Oil"
          className="w-full max-w-sm rounded-lg shadow-lg transform transition duration-700 hover:scale-105 hover:rotate-1"
        />
      </div>

    </div>
  );
};

export default Product;

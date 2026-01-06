import React from "react";
import background from "../assets/background.jpg";
import WhyChooseUs from "./WhyChooseUs";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-center bg-black/40 p-8 md:p-12 rounded-lg 
     max-w-xl md:max-w-3xl lg:max-w-5xl">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Shree <span className="text-yellow-400">Maheba</span> Mustard Oil
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6">
            Pure, Fresh & Healthy Mustard Oil for Your Family
          </p>
          <NavLink to="/contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
};

export default Home;

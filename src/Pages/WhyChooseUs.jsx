import React from "react";
import {
  FaLeaf,
  FaIndustry,
  FaGlobe,
  FaBoxes,
} from "react-icons/fa"; 
import { whyChooseUsData } from "../data/WhyChooseUs"

const iconMap = {
  leaf: <FaLeaf />,
  industry: <FaIndustry />,
  globe: <FaGlobe />,
  boxes: <FaBoxes />,
};

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Why Choose <span className="text-yellow-500">SHRI MAHEBA</span>
          </h2>
          <p className="mt-3 text-green-700">
            Quality, tradition, and reliability in every drop
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-green-200 p-6 text-center
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center 
                              rounded-full bg-yellow-100 text-green-700 text-2xl mb-5">
                {iconMap[item.icon]}
              </div>

              <h3 className="font-semibold text-lg text-yellow-600">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-green-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

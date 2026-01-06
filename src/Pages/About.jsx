import React from "react";
import { FaBullseye, FaLightbulb, FaStar, FaUsers, FaIndustry, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

      {/* 1️⃣ About Shri Maheva Mustard Oil */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          About Shri Maheba Mustard Oil
        </h2>

        <div className="bg-yellow-50 p-8 rounded-lg shadow-md text-gray-700 space-y-4">
          <p>
            At <span className="font-semibold">Shri Mahoba</span>, we believe that the health of your family should never be compromised. 
            That's why we're proud to introduce our <span className="font-semibold">Shudh Sarson Ka Tel (Pure Mustard Oil)</span>, a product rooted in tradition and committed to uncompromising quality.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">✨ Our Commitment to Purity</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-semibold">100% Natural:</span> Made from the finest quality mustard seeds.</li>
            <li><span className="font-semibold">Grade-1 Quality:</span> Certified as Mustard Oil Grade-1, ensuring the highest standards of taste and nutrition.</li>
            <li><span className="font-semibold">Unrefined Goodness:</span> Retains natural aroma and essential nutrients for healthy cooking.</li>
          </ul>

          <div className="space-y-2">
            <p className="font-semibold">🏭 Manufactured and Marketed By: VIPUL OIL MILL</p>
            <p>Vill Mahgauli, Karkoli, Pinahat, Agra-283123</p>
            <p className="font-semibold">📞 Contact: +91 6395291600</p>
            <p className="font-semibold">📧 Email: vipuloiImill@gmail.com</p>
          </div>
        </div>
      </div>

      {/* 2️⃣ Vision & Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
          <FaBullseye className="text-yellow-400 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            At Shri Maheva Mustard Oil, our vision is to be a <span className="font-semibold">trusted provider of pure, natural mustard oil</span> across homes in India and beyond. We aim to <span className="font-semibold">preserve traditional cold-press methods</span> while ensuring modern standards of quality and hygiene. By supporting local farmers and delivering consistent premium-quality oil, we strive to make Shri Maheva Mustard Oil a <span className="font-semibold">symbol of trust, purity, and excellence</span>.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
          <FaLightbulb className="text-yellow-400 text-4xl mb-4"/>
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to <span className="font-semibold">deliver authentic, unrefined mustard oil</span> retaining natural aroma, flavor, and nutrients. We educate consumers about the benefits of choosing <span className="font-semibold">pure over refined oil</span>. Combining <span className="font-semibold">traditional methods with modern processes</span> and maintaining strict quality standards, every bottle reflects our commitment to <span className="font-semibold">purity, excellence, and trust</span> for healthier cooking.
          </p>
        </div>
      </div>

      {/* 3️⃣ Core Values */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaStar className="text-yellow-400 text-3xl mb-2 mx-auto"/>
            <h4 className="text-xl font-semibold mb-1">Quality Excellence</h4>
            <p className="text-gray-700">Ensuring best quality at every step of production.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUsers className="text-yellow-400 text-3xl mb-2 mx-auto"/>
            <h4 className="text-xl font-semibold mb-1">Customer Focus</h4>
            <p className="text-gray-700">Understanding and fulfilling customer needs.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaIndustry className="text-yellow-400 text-3xl mb-2 mx-auto"/>
            <h4 className="text-xl font-semibold mb-1">Manufacturing Expertise</h4>
            <p className="text-gray-700">Advanced processes ensuring pure and healthy oil.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaGlobe className="text-yellow-400 text-3xl mb-2 mx-auto"/>
            <h4 className="text-xl font-semibold mb-1">Export Readiness</h4>
            <p className="text-gray-700">Global standards compliant for export.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;

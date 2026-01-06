import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions about Shri Maheva Mustard Oil or want to connect for business? We’re just a message away.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FiMapPin className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
            <p className="text-gray-600">Pinahat Agra – 283123</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FiPhone className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">+91 6395291600</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FiMail className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">vipuloilmill@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6"  action={import.meta.env.VITE_WEB3FORMS_API_URL}
  method="POST">
           <input   type="hidden"
    name="access_key"
    value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}></input>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-full transition disabled:opacity-50"
            >
              Send Message
            </button>

            {/* Status message */}
            {status && <p className="text-center mt-2 text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

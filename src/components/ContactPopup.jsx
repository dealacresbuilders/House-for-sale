"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry Submitted Successfully!");
        setFormData({ name: "", phone: "", message: "" });
        onClose();
      } else {
        alert("Something went wrong!");
      }

    } catch (err) {
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-gray-100">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl transition"
        >
          ×
        </button>

        <h3 className="text-2xl font-semibold text-gray-900">
          Get Best Price Details
        </h3>

        <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">
          Enquiry for:
          <span className="block font-medium text-gray-900 mt-1">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
            outline-none transition placeholder:text-gray-500 placeholder:italic"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
            outline-none transition placeholder:text-gray-500 placeholder:italic"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Write your requirement (budget, location, size, etc.)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
            outline-none resize-none transition placeholder:text-gray-500 placeholder:italic"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] 
            text-white font-semibold rounded-xl transition shadow-md disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

        </form>
      </div>
    </div>
  );
}
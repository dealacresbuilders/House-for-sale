"use client";

import React, { useState } from "react";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
      alert("Please enter valid 10 digit number");
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
          source: "Sidebar Enquiry Form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Request submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert("Something went wrong!");
      }

    } catch (error) {
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-28 bg-white rounded-2xl shadow-lg p-8 border border-[#E5E7EB]">

      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        Get Instant Call Back
      </h3>

      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Share your requirement and our property consultant will contact you shortly with complete details.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <input
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 
          text-gray-900 placeholder:text-gray-600 placeholder:font-medium
          focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
          outline-none transition"
        />

        {/* Phone */}
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 
          text-gray-900 placeholder:text-gray-600 placeholder:font-medium
          focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
          outline-none transition"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          placeholder="Write your requirement (budget, location preference, shop size, etc.)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 
          text-gray-900 placeholder:text-gray-600 placeholder:font-medium
          focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
          outline-none resize-none transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F97316] text-white py-3 rounded-xl font-semibold 
          hover:bg-[#EA580C] transition shadow-md disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Request Call Back"}
        </button>

      </form>
    </div>
  );
};

export default SidebarEnquiryForm;
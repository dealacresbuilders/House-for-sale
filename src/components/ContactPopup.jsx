"use client";

import { useState, useEffect } from "react";
import AlertPopup from "@/components/AlertPopup";

export default function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    message: "",
  });

  // ✅ AUTO CLOSE ALERT AFTER 2.5s
  useEffect(() => {
    if (popup.open) {
      const timer = setTimeout(() => {
        setPopup({ open: false, type: "", message: "" });
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [popup.open]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION
    if (formData.phone.length !== 10) {
      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be 10 digits",
      });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        propertyTitle,
        website: "houseforsaleinfaridabad.com",
        source: "Popup Enquiry",
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setPopup({
          open: true,
          type: "success",
          message: "Enquiry submitted successfully!",
        });

        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        // close modal after success
        setTimeout(() => {
          onClose?.();
        }, 1200);

      } else {
        setPopup({
          open: true,
          type: "error",
          message: data.message || "Something went wrong!",
        });
      }

    } catch (err) {
      setPopup({
        open: true,
        type: "error",
        message: "Server error. Please try later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      {/* ALERT POPUP */}
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup({ open: false, type: "", message: "" })
        }
      />

      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-gray-100">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl transition"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-gray-900">
          Get Best Price Details
        </h2>

        <p className="text-sm text-gray-600 mt-3 mb-7">
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
            outline-none transition placeholder:text-gray-500"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
            outline-none transition placeholder:text-gray-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Write your requirement (budget, location, size, etc.)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]
            outline-none resize-none transition placeholder:text-gray-500"
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
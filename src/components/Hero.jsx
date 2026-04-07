"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

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
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative max-w-7xl mx-auto py-8 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            House for Sale in{" "}
            <span className="text-[#FF6500]">Faridabad</span>
          </h1>

          <p className="text-lg max-w-2xl text-gray-200 leading-relaxed">
            Searching for a house for sale in Faridabad that fits your lifestyle, budget, and future goals?<br/><br/>
      Deal Acres helps you discover verified residential properties in the most sought-after locations of Faridabad.<br/><br/>
      From independent houses and builder floors to spacious family homes, we bring you trusted options.<br/><br/>
      With expert guidance, transparent pricing, and genuine listings, finding a house for sale in Faridabad has never been easier.
          </p>
          <Link href="/how-it-works">
  <button className="relative overflow-hidden bg-[#FF6500] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-[#FF6500] hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>

        {/* RIGHT GLASS FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-white">

            <h3 className="text-2xl font-semibold mb-2">
              Free Consultation
            </h3>

            <p className="text-sm mb-6 text-gray-300">
              Fill your details and our expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#FF6500] focus:border-[#FF6500]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#FF6500] focus:border-[#FF6500]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#FF6500] focus:border-[#FF6500]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold 
                bg-[#FF6500] text-white 
                hover:bg-[#e65a00] 
                transition duration-300 
                disabled:opacity-70 shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
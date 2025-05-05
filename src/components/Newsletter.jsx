
// src/components/Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter for Design Insights</h2>
      <p className="text-gray-600 mb-6">Be the first to discover trends, inspirations, and special offers.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-3 rounded-l border border-gray-300 w-80"
        />
        <button className="bg-black text-white px-6 py-3 rounded-r hover:bg-gray-800 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;

// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say About Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black text-white p-6 rounded shadow">
          <p className="mb-4">“Working with your design team was a dream. They brought professionalism, taste, and creativity.”</p>
          <p className="font-semibold">Sophia Carter – New York, USA</p>
        </div>
        <div className="bg-black text-white p-6 rounded shadow">
          <p className="mb-4">“Exceptional service from the first consultation to final execution. Highly recommended!”</p>
          <p className="font-semibold">James Bennett – Canada</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
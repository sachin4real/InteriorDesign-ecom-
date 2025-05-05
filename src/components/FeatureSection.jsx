import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="./70204b16d915e0eb9b651421a75c9164824b17f1.png" // Replace with your actual image path
            alt="Interior Room"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Designing Your Dream With Brilliance
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
          </p>

          {/* Subtopics */}
          <div className="space-y-4">
            <div className="border rounded px-4 py-3 hover:bg-gray-50 transition cursor-pointer">
              <div className="flex justify-between items-center">
                <span>Living Room Interior Design</span>
                <span className="text-xl">+</span>
              </div>
            </div>
            <div className="border rounded px-4 py-3 hover:bg-gray-50 transition cursor-pointer">
              <div className="flex justify-between items-center">
                <span>Commercial Office Room Interior Design</span>
                <span className="text-xl">+</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

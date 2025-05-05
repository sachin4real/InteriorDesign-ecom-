import React from "react";
import { FiArrowDown } from "react-icons/fi";

const Hero = ({ onScrollDown }) => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left: Text */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Interior Design
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation, allowing you to transform your living spaces into the epitome of luxury and sophistication
          </p>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-200 font-semibold">
            Start Project
          </button>

          {/* Stats */}
          <div className="flex gap-12 pt-10">
            <div>
              <p className="text-3xl font-semibold text-gray-900">400+</p>
              <p className="text-sm text-gray-500">Project Complete</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-gray-900">600+</p>
              <p className="text-sm text-gray-500">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-gray-900">100+</p>
              <p className="text-sm text-gray-500">Unique Styles</p>
            </div>
          </div>
        </div>

        {/* Right: Images */}
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-center items-start">
          {/* Main image */}
          <img
            src="./754fa69fd3a535ebb6b9aa1e3667f84f5670fe3d.jpg"
            alt="Interior Design"
            className="rounded-lg shadow-lg w-[360px] md:w-[400px]"
          />

          {/* Floating image with outline */}
          <div className="absolute -bottom-24 left-6 w-[340px] md:w-[360px] z-10">
            <div className="absolute -top-4 -left-4 w-full h-full border border-black rounded-md z-[-1]" />
            <img
              src="./cbc82576f8bfdcac31b86e0b93dd464c3569ada4.jpg"
              alt="Decor"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Down Arrow */}
          <button
            onClick={onScrollDown}
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md p-3"
          >
            <FiArrowDown className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

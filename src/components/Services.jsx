import React from "react";
import { FiZap, FiHome, FiSun } from "react-icons/fi"; // Example icons from react-icons

const services = [
  {
    icon: <FiZap className="text-3xl text-black mb-3" />,
    title: "Lighting Design",
    desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.",
  },
  {
    icon: <FiHome className="text-3xl text-black mb-3" />,
    title: "Interior Design",
    desc: "From concept to completion, we oversee every detail to bring your vision to life efficiently.",
  },
  {
    icon: <FiSun className="text-3xl text-black mb-3" />,
    title: "Outdoor Design",
    desc: "Celebrate the changing seasons with our seasonal outdoor decor services.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 space-y-8 md:space-y-0">
          {services.map((service, idx) => (
            <div key={idx} className="flex-1 px-4">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

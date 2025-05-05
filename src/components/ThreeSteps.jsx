import React from "react";
import { FiFlag, FiTool, FiCheckCircle } from "react-icons/fi"; // Icons for steps

const steps = [
  {
    icon: <FiFlag className="text-xl text-black" />,
    title: "Start Project",
    desc: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
  },
  {
    icon: <FiTool className="text-xl text-black" />,
    title: "Craft",
    desc: "Collaborate closely to achieve design excellence — refining your vision and crafting brilliance into every aspect of your space.",
  },
  {
    icon: <FiCheckCircle className="text-xl text-black" />,
    title: "Execute",
    desc: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.",
  },
];

const ThreeSteps = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Steps */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Designing Your Dream in Three Simple Steps
          </h2>
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="./79babf3017497c6191cb773fb741bd9893bb6527.jpg" // Replace with actual image path
            alt="Interior Example"
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;

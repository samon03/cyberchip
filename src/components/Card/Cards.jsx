import React from "react";

const features = [
  {
    icon: "📷",
    title: "Camera Surveillance",
    description:
      "Dolor in reprehenderit aliqua eu fugiat nulla non proident sunt in laborum incididunt.",
  },
  {
    icon: "📁",
    title: "Folder Security",
    description:
      "Dolor in reprehenderit aliqua eu fugiat nulla non proident sunt in laborum incididunt.",
  },
  {
    icon: "🔐",
    title: "End to End Encryption",
    description:
      "Dolor in reprehenderit aliqua eu fugiat nulla non proident sunt in laborum incididunt.",
  },
  {
    icon: "🧬",
    title: "Fingerprint Security",
    description:
      "Dolor in reprehenderit aliqua eu fugiat nulla non proident sunt in laborum incididunt.",
  },
];

const Cards = () => {
  return (
    <section className="text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl text-blue-300 uppercase mb-4">What We Do</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Complete And Effective Protection For <br/> Your Home And Office
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1D2B7B] p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-blue-300">{item.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-blue-500 text-white font-semibold px-6 py-2 mb-12 rounded-full hover:bg-gray-900 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Cards;

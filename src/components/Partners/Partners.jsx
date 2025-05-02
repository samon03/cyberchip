import React from "react";
import logo1 from "../../images/the.png";
import logo2 from "../../images/4988.png_860-removebg-preview.png";
import logo3 from "../../images/X_logo_2023_(white).png";
import logo4 from "../../images/hotel.png";
import logo5 from "../../images/cisco.png";
import logo6 from "../../images/apex.png";

const partners = [
  { name: "Brand 1", logo: logo1 },
  { name: "Brand 2", logo: logo2 },
  { name: "Brand 3", logo: logo3 },
  { name: "Brand 4", logo: logo4 },
  { name: "Brand 5", logo: logo5 },
  { name: "Brand 6", logo: logo6 },
];

const Partners = () => {
  return (
    <section className="p-4 mb-8 text-white text-center">
      <h3 className="text-xl text-blue-300 uppercase mb-4">Partners</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">We're Working With</h2>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-32 h-32 bg-[#1D2B7B] flex items-center justify-center rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={partner.logo} alt={partner.name} className="max-h-16 p-2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

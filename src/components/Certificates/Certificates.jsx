import React from "react";
import { certificates } from "../../constants"; // Import the certificate data

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A glimpse of the certifications I’ve earned throughout my learning journey.
        </p>
      </div>

      {/* Certificates Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Certificate Cards */}
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            

            {/* Certificate Content Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Logo and Details */}
              
                <div className="flex items-center space-x-6">
  <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center p-2">
    <img
      src={cert.logo}
      alt={cert.name}
      className="w-full h-full object-contain"
    />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                </div>
              </div>

              {/* View Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-purple-400 hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

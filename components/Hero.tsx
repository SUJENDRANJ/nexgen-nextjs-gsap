"use client";

import React, { useEffect, useState } from "react";

const people = [
  { name: "Suje J", role: "Frontend Developer" },
  { name: "Prabha S", role: "Backend Engineer" },
  { name: "Kabi R", role: "UI/UX Designer" },
  { name: "Aarav R", role: "Product Strategist" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % people.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentPerson = people[index];

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left: Text Content */}
      <div className="flex flex-col w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Some phrase blah..
        </h1>

        {/* Name Animation */}
        <div className="relative h-[60px] overflow-hidden">
          <p
            key={currentPerson.name}
            className="absolute text-2xl md:text-4xl font-bold text-yellow-300 animate-fade-slide uppercase mt-3"
          >
            {currentPerson.name}
          </p>
        </div>

        {/* Role Animation */}
        <div className="relative h-[40px] overflow-hidden">
          <p
            key={currentPerson.role}
            className="absolute text-lg md:text-xl text-gray-400 animate-fade-slide"
          >
            {currentPerson.role}
          </p>
        </div>
      </div>

      {/* Right: Video Section */}
      <div className="w-full md:w-1/2 max-w-xl h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <video
          src="/hero-loop.mov"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl shadow-2xl w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

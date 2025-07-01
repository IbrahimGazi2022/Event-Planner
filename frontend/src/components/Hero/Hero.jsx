import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-[178px]">

      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">

        <div className="w-full md:w-1/2 space-y-6 text-white">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold leading-tight uppercase">
            Plan Your Perfect Event With Us
          </h1>
          <p className="text-lg md:text-xl">
            Discover and create memorable events that your guests will love
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium">
            Explore Events
          </button>
        </div>

        <div className="hidden md:block md:w-1/2">
          <div className="flex justify-end">
            <img
              src="/images/hero-man.png"
              alt="Event Planner"
              className="max-h-[80vh] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  
import React from "react";
import PropertySearchForm from "./PropertySearchForm";

const Hero = () => {
  return (
    <div className="relative py-24 sm:py-32 lg:pb-40 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find Your Dream Home
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Access exclusive listings and place your bids on Dwelo. Discover a
            new way to find and secure your dream home today.
          </p>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div
            className="-m-2 rounded-md bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-lg lg:p-4
          "
          >
            <PropertySearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

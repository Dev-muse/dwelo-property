import React from "react";

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
            <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter Location (City, State, Zip, etc"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-emerald-500"
                />
              </div>
              <div className="w-full md:w-2/5 md:pl-2">
                <label htmlFor="property-type" className="sr-only">
                  Property Type
                </label>
                <select
                  id="property-type"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-emerald-500"
                >
                  <option value="All">All</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Studio">Studio</option>
                  <option value="Condo">Condo</option>
                  <option value="House">House</option>
                  <option value="Cabin Or Cottage">Cabin or Cottage</option>
                  <option value="Loft">Loft</option>
                  <option value="Room">Room</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-8 py-2 rounded-lg bg-black text-white hover:opacity-80 focus:outline-none focus:ring focus:ring-black
                 "
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

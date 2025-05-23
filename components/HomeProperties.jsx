import React from "react";

import PropertyCard from "./PropertyCard";
import Link from "next/link";
// import { fetchProperties } from "@/utils/requests";
import connectDB from "@/config/database";
import Property from "@/models/Property";


// const properties = await fetchProperties();
// properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

const HomeProperties =async () => {

  
    await connectDB();
    const recentProperties = await Property.find({}).sort({createdAt:-1}).limit(3).lean();

  // const recentProperties = properties
  //   .sort(() => Math.random() - Math.random())
  //   .slice(0, 3);



  return (
    <section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p className="text-center font-medium ">
                No recent properties found
              </p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-primary text-white text-center py-4 px-6 rounded-lg hover:opacity-70"
        >
          View All Properties
        </Link>
      </section>
    </section>
  );
};

export default HomeProperties;

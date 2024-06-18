import Link from "next/link";
import React from "react";
// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const PropertyList = properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ));
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length < 1 ? (
            <p className="text-center text-2xl mx-auto font-bold text-emerald-700">
              No properties found
            </p>
          ) : (
            PropertyList
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;

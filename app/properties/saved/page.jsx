"use client";

import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const SavedPropertiesPage = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch("/api/bookmarks");

        if (res.status == 200) {
          const data = await res.json();

          setProperties(data);
        } else {
          console.log("res not 200", res.statusText);
          toast.error("Could not get bookmarked properties");
        }
      } catch (error) {
        console.log(error);
        toast.error("Could not get bookmarked properties");
      } finally {
        setLoading(false);
      }
    };
    fetchSavedProperties();
    console.log("fetched properties", properties);
  }, []);

  const PropertyList = properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ));
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="px-4 py-6">
      <h1 className="text-center text-primary text-3xl mb-4 font-semibold">
        Saved Properties
      </h1>
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length < 1 ? (
            <p className="text-center text-2xl mx-auto font-bold text-emerald-700">
              No saved properties found
            </p>
          ) : (
            PropertyList
          )}
        </div>
      </div>
    </section>
  );
};

export default SavedPropertiesPage;

"use client";

import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MdArrowBack } from "react-icons/md";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const result = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );
        if (result.status == 200) {
          const data = await result.json();
          setProperties(data);
          console.log("data", data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [location, propertyType]);

  const PropertyList = properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ));

  return (
    <>
      <section className="py-4 bg-primary">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className="px-4 py-6">
          <div className=" mx-auto container-xl lg:container px-4 py-6">
            <Link
              href={"/properties"}
              className="text-primary mb-3 flex items-center hover:underline"
            >
              {" "}
              <MdArrowBack className="mr-2" /> Back to properties
            </Link>
            <h1 className="text-2xl mb-4 font-semibold text-primary text-center">
              Search Results
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.length < 1 ? (
                <p className="text-center text-2xl mx-auto ">
                  No search results found
                </p>
              ) : (
                PropertyList
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SearchResultsPage;

"use client";

import { fetchProperty } from "@/utils/requests";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const [Property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const data = await fetchProperty(id);
        setProperty(data);
      } catch (error) {
        console.log("error fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    if (Property === null) {
      getData();
    }
  }, [Property, id]);

  return (
    <div>
      <h1 className="text-emerald-600 text-center  my-4 text-3xl">
        {Property.name}{" "}
      </h1>
    </div>
  );
};

export default PropertyPage;

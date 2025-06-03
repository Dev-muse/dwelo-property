"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const PropertyCardImage = ({ propertyImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % propertyImages.length
      );
    }, 10000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [propertyImages.length]);

  console.log('PropertyCardImage',propertyImages[currentImageIndex])
    
  return (
    <Image
      src={`${propertyImages[currentImageIndex]}`}
      alt=""
      sizes="100vw"
      width={0}
      height={0}
      className="w-full h-[250px] rounded-t-xl"
    />
  );
};

export default PropertyCardImage;

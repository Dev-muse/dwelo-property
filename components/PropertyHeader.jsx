import Image from "next/image";
import React from "react";

const PropertyHeader = ({ image }) => {
 
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`${image}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;

'use client';
import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);


  if (properties.length === 0) {
    return <p>You have no property listings</p>;
  }

  return (
    <div>
      {properties.map((property) => {
        const { street, city, state, zipcode } = property.location;
        return (
          <div className="mb-10" key={property._id}>
            <Link href={`/properties/${property._id}`}>
              <Image
                className="h-32 w-full rounded-md object-cover"
                src={property.images[0]}
                alt={property.name}
                width={500}
                height={100}
                priority
              />
            </Link>
            <div className="mt-2">
              <p className="text-lg font-semibold">{property.name}</p>
              <p className="text-gray-600">
                Address: {`${street} ${city} ${state} ${zipcode}`}
              </p>
            </div>
            <div className="mt-2">
              <Link
                href={`/properties/${property._id}/edit`}
                className="bg-emerald-800 text-white px-3 py-3 rounded-md mr-2 hover:bg-primary"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteProperty(property._id)}
                className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-600"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileProperties;

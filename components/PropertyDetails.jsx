import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import PropertyMap from "./PropertyMap";
import { TbRulerMeasure } from "react-icons/tb";

const PropertyDetails = ({ Property }) => {
  const {
    type,
    name,
    location,
    description,
    images,
    square_feet,
    amenities,
    beds,
    baths,
    seller_info,
    rates,
  } = Property;
  const { street, city, state, zipcode } = location;
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{Property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{Property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarkerAlt className="fa-solid fa-location-dot text-lg text-primary   mr-2" />
          <p className="text-slate-700">{`${street}, ${city}, ${state},${zipcode}`}</p>
        </div>

        <h3 className="text-lg text-center font-bold my-6 bg-gray-800 text-white p-2">
          Rates &amp; Options
        </h3>
        <div className="flex  flex-row justify-around">
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between space-x-4 text-blue-700">
            <div className="flex items-center justify-center mb-4  md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Nightly</div>
              <div className="text-2xl font-bold text-primary">
                {rates.nightly ? (
                  `$${rates.nightly.toLocaleString()}`
                ) : (
                  <FaTimes className="  text-red-700" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center mb-4  md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Weekly:</div>
              <div className="text-2xl font-bold text-primary">
                {rates.weekly ? (
                  `$${rates.weekly.toLocaleString()}`
                ) : (
                  <FaTimes className="  text-red-700" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Monthly:</div>
              <div className="text-2xl font-bold text-primary">
                {" "}
                {rates.monthly ? (
                  `$${rates.monthly.toLocaleString()}`
                ) : (
                  <FaTimes className="  text-red-700" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description &amp; Details</h3>
        <div className="flex justify-center gap-4 text-primary0 mb-4 text-xl space-x-9">
          <p className="flex items-center align-baseline">
            <FaBed className="mr-2 text-primary" />
            {beds}
            <span className="hidden sm:inline ml-1">
              {" "}
              {`${beds > 1 ? "Beds" : "Bed"}`}
            </span>
          </p>

          <p className="flex items-center align-baseline">
            <FaBath className="mr-2 text-primary" /> {baths}
            <span className="hidden sm:inline ml-1">
              {" "}
              {`${baths > 1 ? "Baths" : "Bath"}`}
            </span>
          </p>

          <p className="flex items-center align-baseline">
            <TbRulerMeasure className="mr-2 text-primary" />

            {square_feet.toLocaleString()}
            <span className="hidden sm:inline ml-1"> sqft</span>
          </p>
        </div>

        <p className=" text-gray-500 mb-4">{description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2">
          {amenities.map((amenity, index) => {
            return (
              <li key={index} className="flex space-x-1 items-baseline">
                <FaCheck className="  text-primary mr-2 " /> {amenity}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <PropertyMap Property={Property} />
      </div>
    </main>
  );
};

export default PropertyDetails;

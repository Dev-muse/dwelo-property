import Link from "next/link";
import PropertyCardImage from "./PropertyCardImage";
import { FaBath, FaBed } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiCoinInsert } from "react-icons/ci";
import { FaCoins } from "react-icons/fa6";

const PropertyCard = ({ property }) => {
  const { type, name, rates, beds, baths, square_feet, location, images, _id } =
    property;

  const showRate = () => {
    const { monthly, weekly, nightly } = rates;
    if (monthly) {
      return `${monthly.toLocaleString()}/mo`;
    } else if (weekly) {
      return `${weekly.toLocaleString()}/wk`;
    } else if (nightly) {
      return `${nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <PropertyCardImage propertyImages={images} />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-emerald-500 font-bold text-right md:text-center lg:text-right">
          ${showRate()}
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-500 mb-4">
          <p className="flex items-center flex-wrap">
            <FaBed className="inline mr-1 text-emerald-700" /> {beds}&nbsp;
            <span className="md:hidden lg:inline">
              {beds > 1 ? "Beds" : "Bed"}
            </span>
          </p>
          <p className="flex items-center flex-wrap">
            <FaBath className="inline mr-1 text-emerald-700" /> {baths}&nbsp;
            <span className="md:hidden lg:inline">
              {baths > 1 ? "Baths" : "Bath"}
            </span>
          </p>
          <p className="flex items-center flex-wrap">
            <TbRulerMeasure className="inline mr-1 text-emerald-700" />
            {square_feet.toLocaleString()}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {rates.weekly && (
            <p className="flex items-center flex-wrap">
              <FaCoins className="inline mr-1" /> $
              {rates.weekly.toLocaleString()}
              /wk
            </p>
          )}
          {rates.monthly && (
            <p className="flex items-center flex-wrap">
              <FaCoins className="inline mr-1" /> $
              {rates.monthly.toLocaleString()}
              /mo
            </p>
          )}
          {rates.nightly && (
            <p className="flex items-center flex-wrap">
              <FaCoins className="inline mr-1" /> $
              {rates.nightly.toLocaleString()}
              /night
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center justify-center gap-2 mb-4 lg:mb-0">
            <FaMapMarkerAlt className="inline mr-1" />
            <span className="text-emerald-600"> {location.city}</span>
          </div>
          <Link
            href={`/properties/${_id}`}
            className="h-[36px] bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

import Image from "next/image";
import Link from "next/link";
import {
  FaBath,
  FaBed,
  FaMapMarked,
  FaMoneyBill,
  FaRulerCombined,
} from "react-icons/fa";
import { IProperty } from "../../../types";

type IProps = {
  property?: IProperty;
};

const PropertyCard = ({ property }: IProps) => {
  const getRateDisplay = () => {
    if (!property) return "Price on request";

    const { monthlyRate, weeklyRate, nightlyRate } = property;

    if (monthlyRate != null) {
      return `${monthlyRate.toLocaleString()}/mo`;
    }

    if (weeklyRate != null) {
      return `${weeklyRate.toLocaleString()}/wk`;
    }

    if (nightlyRate != null) {
      return `${nightlyRate.toLocaleString()}/night`;
    }

    return "Price on request";
  };

  if (!property) return "Not property";
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/${property?.images[0]}`}
        width={0}
        height={0}
        alt={property.name}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" /> {property.beds}{" "}
            <span className="md:hidden lg:inline"> Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> {property.baths}{" "}
            <span className="md:hidden lg:inline"> Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" /> {property?.squareFeet}
            <span className="md:hidden lg:inline"> sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.nightlyRate && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Nightly
            </p>
          )}

          {property.weeklyRate && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Weekly
            </p>
          )}

          {property.monthlyRate && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarked className="inline mr-1 text-orange-700" />
            <span className="text-orange-700">
              {" "}
              {property.city}, {property.state}
            </span>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;

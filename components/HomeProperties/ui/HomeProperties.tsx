import Link from "next/link";
import { IProperty } from "../../../types";
import { fetchProperties } from "../../../utils/requests";
import PropertyCard from "../../PropertyCard";

const HomeProperties = async () => {
  const propertiesRes = await fetchProperties();

  const propertiesArray: IProperty[] = Array.isArray(propertiesRes)
    ? propertiesRes
    : propertiesRes.data ?? [];

  const recentProperties: IProperty[] = propertiesArray
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent properties
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p>No properties found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;

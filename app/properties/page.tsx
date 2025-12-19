//import properties from '../../properties.json'
import PropertyCard from "../../components/PropertyCard";
import { IProperty } from "../../types/index";
import { fetchProperties } from "../../utils/requests";

const PropertiesPage = async () => {
  // const properties: IProperty[] = await prisma.property.findMany();
  const properties: IProperty[] = await fetchProperties();

  (properties as IProperty[]).sort(
    (a, b) => Date.parse(String(b.createdAt)) - Date.parse(String(a.createdAt))
  );

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;

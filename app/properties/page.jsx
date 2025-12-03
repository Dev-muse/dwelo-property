// import properties from "@/properties.json";
import Pagination from "@/components/Pagination";
import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
// import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async ({ searchParams: { page = 1, pageSize = 9 } }) => {
  // const properties = await fetchProperties();
  await connectDB();

  // pagination logic
  const skip = (page - 1) * pageSize;
  const totalItems = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(pageSize).lean();

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const PropertyList = properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ));

  const showPagination  = totalItems> pageSize;
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length < 1 ? (
            <p className="text-center text-2xl mx-auto font-bold text-emerald-700">
              No properties found
            </p>
          ) : (
            PropertyList
          )}
        </div>
        {showPagination && <Pagination totalCount={totalItems} page={parseInt(page)} pageSize={parseInt(pageSize)} />}
      </div>
    </section>
  );
};

export default PropertiesPage;

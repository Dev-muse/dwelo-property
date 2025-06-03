
import BookmarkButton from "@/components/BookmarkButton";
import PropertyContactForm from "@/components/PropertyContactForm";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyImages from "@/components/PropertyImages";
import ShareButtons from "@/components/ShareButtons";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const PropertyPage = async({params}) => {
  await connectDB()
  const propertyItem = await Property.findById(params.id).lean();

  const property = convertToSerializableObject(propertyItem)
   
  const propertyImage = property.images;
   if (!property ) {
    return <h1 className="text-center mt-10 font-bold">Property not found</h1>;
  }

  return (
    <>
          <PropertyHeader image={property.images[0]} />
          {/* back btn */}
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-emerald-800 hover:text-emerald-800 hover:underline hover:underline-offset-2 flex items-center"
              >
                <MdArrowBack className="mr-2" />
                Back to Properties
              </Link>
            </div>
          </section>

          {/* property info */}
          <section className="bg-primary opacity-80">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails Property={property} />
                {/* aside */}
                <aside className="space-y-4">
                  <BookmarkButton Property={property} />
                  <ShareButtons Property={property} />
                  {/* contact form */}
                  <PropertyContactForm Property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={propertyImage} />
        </>
  );
};

export default PropertyPage;

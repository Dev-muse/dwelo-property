"use client";

import BookmarkButton from "@/components/BookmarkButton";
import PropertyContactForm from "@/components/PropertyContactForm";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyImages from "@/components/PropertyImages";
import ShareButtons from "@/components/ShareButtons";
import Spinner from "@/components/Spinner";
import { fetchProperty } from "@/utils/requests";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { IoMdArrowBack } from "react-icons/io";

const PropertyPage = () => {
  const [Property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const data = await fetchProperty(id);
        setProperty(data);
      } catch (error) {
        console.log("error fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    if (Property === null) {
      getData();
    }
  }, [Property, id]);

  if (!Property && !loading) {
    return <h1 class="text-center mt-10 font-bold">Property not found</h1>;
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && Property && (
        <>
          <PropertyHeader image={Property.images[0]} />
          {/* back btn */}
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-emerald-800 hover:text-emerald-800 hover:underline hover:underline-offset-2 flex items-center"
              >
                <IoMdArrowBack className="mr-2" />
                Back to Properties
              </Link>
            </div>
          </section>

          {/* property info */}
          <section className="bg-primary opacity-80">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails Property={Property} />
                {/* aside */}
                <aside className="space-y-4">
                  <BookmarkButton Property={Property} />
                  <ShareButtons Property={Property} />
                  {/* contact form */}
                  <PropertyContactForm />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={Property.images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;

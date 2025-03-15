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
import { MdArrowBack } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";


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
    return <div className="grid h-screen place-content-center bg-white px-4">
    <div className="text-center">
      <h1 className="text-9xl font-black text-gray-200">:(</h1>

      <IoWarningOutline className="text-5xl text-center text-yellow-400 mx-auto" />
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </p>
      <p className="mt-4 text-gray-500">We can't find that property.</p>

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>;
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
                <MdArrowBack className="mr-2" />
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
                  <PropertyContactForm Property={Property} />
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

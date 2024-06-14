"use client";

import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeader from "@/components/PropertyHeader";
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
                <i className="fa-solid fa-location-dot text-lg text-slate-700 mr-2">
                  <i className="fa fa-xmark text-blue-700">
                    <i className="fa-solid fa-bed">
                      <i className="fa-solid fa-bath">
                        <i className="fa-solid fa-ruler-combined">
                          <i className="fas fa-check text-emerald-800 mr-2 mt-3">
                            <i className="fas fa-check text-emerald-800 mr-2 mt-3">
                              <i className="fas fa-check text-emerald-800 mr-2 mt-3">
                                <aside className="space-y-4">
                                  <button className="bg-black hover:bg-white text-white hover:text-black font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                                    <i className="fas fa-bookmark mr-2">
                                      {" "}
                                      Bookmark Property
                                    </i>
                                  </button>

                                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                                    <i className="fas fa-share mr-2">
                                      {" "}
                                      Share Property
                                    </i>
                                  </button>

                                  {/* contact form */}
                                  <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-6">
                                      Contact Property Manager
                                    </h3>
                                    <form>
                                      <div className="mb-4">
                                        <label
                                          className="block text-gray-700 text-sm font-bold mb-2"
                                          htmlFor="name"
                                        >
                                          Name:
                                        </label>
                                        <input
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="name"
                                          type="text"
                                          placeholder="Enter your name"
                                          required=""
                                        />
                                      </div>
                                      <div className="mb-4">
                                        <label
                                          className="block text-gray-700 text-sm font-bold mb-2"
                                          htmlFor="email"
                                        >
                                          Email:
                                        </label>
                                        <input
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="email"
                                          type="email"
                                          placeholder="Enter your email"
                                          required=""
                                        />
                                      </div>
                                      <div className="mb-4">
                                        <label
                                          className="block text-gray-700 text-sm font-bold mb-2"
                                          htmlFor="phone"
                                        >
                                          Phone:
                                        </label>
                                        <input
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="phone"
                                          type="text"
                                          placeholder="Enter your phone number"
                                        />
                                      </div>
                                      <div className="mb-4">
                                        <label
                                          className="block text-gray-700 text-sm font-bold mb-2"
                                          htmlFor="message"
                                        >
                                          Message:
                                        </label>
                                        <textarea
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                                          id="message"
                                          placeholder="Enter your message"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                </aside>
                              </i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </i>
                  </i>
                </i>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyPage;

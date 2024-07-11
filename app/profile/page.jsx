"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import profileDefault from "@/assets/images/profile.png";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const Profile = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteProperty = async (propertyId) => {
    const confirm = window.confirm(
      "Are you sure you wish to delete this listing?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: "DELETE",
      });
      if (res.status == 200) {
        // UPDATE PROPERTY LIST
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );
        setProperties(updatedProperties);
        toast.success("Property Deleted!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("property could not be deleted");
      }
    } catch (error) {
      toast.error("Failed to delete property");
      console.log("deleting property error:", error.message);
    }
  };

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`api/properties/user/${userId}`);
        if (res.status == 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    // call function to get data only if session is available
    if (session?.user?.id) {
      fetchUserProperties(session?.user?.id);
    }
  }, [session]);

  return (
    <section className="bg-primary">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span> {profileName}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span>
                {profileEmail}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              {!loading && properties.length === 0 && (
                <p>You have no property listings</p>
              )}

              {loading ? (
                <Spinner loading={loading} />
              ) : (
                properties.map((property) => {
                  const { street, city, state, zipcode } = property.location;
                  return (
                    <div className="mb-10" key={property._id}>
                      <Link href={`/properties/${property._id}`}>
                        <Image
                          className="h-32 w-full rounded-md object-cover"
                          src={property.images[0]}
                          alt={property.name}
                          width={500}
                          height={100}
                          priority
                        />
                      </Link>
                      <div className="mt-2">
                        <p className="text-lg font-semibold">{property.name}</p>
                        <p className="text-gray-600">
                          Address: {`${street} ${city} ${state} ${zipcode}`}
                        </p>
                      </div>
                      <div className="mt-2">
                        <Link
                          href={`/properties/${property._id}/edit`}
                          className="bg-emerald-800 text-white px-3 py-3 rounded-md mr-2 hover:bg-primary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteProperty(property._id)}
                          className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-600"
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

import Image from "next/image";

import profileDefault from "@/assets/images/profile.png";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import ProfileProperties from "@/components/ProfileProperties";
import { convertToSerializableObject } from "@/utils/convertToObject";

const Profile = async () => {
  await connectDB();
  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("User ID is required");
  }

  const profileImage = sessionUser?.user?.image;
  const profileName = sessionUser?.user?.name;
  const profileEmail = sessionUser?.user?.email;

  const propertiesDocs = await Property.find({ owner: userId }).lean();
  const properties = propertiesDocs.map(convertToSerializableObject);
  // console.log("PROFILE PAGE" ,properties);

  return (
    <section className="bg-primary">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
            Your Profile
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full object-fill mx-auto md:mx-0"
                  src={profileImage || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>
              <h2 className="text-lg mb-4">
                <span className="font-bold block">Name: </span> {profileName}
              </h2>
              <h2 className="text-lg">
                <span className="font-bold block">Email: </span>
                {profileEmail}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4 mt-10 md:mt-0">
              <h2 className="text-xl font-bold mb-4 text-center md:text-left">
                Your Listings:
              </h2>
              <ProfileProperties properties={properties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

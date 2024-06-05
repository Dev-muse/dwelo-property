import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {/*card 1  */}

          <InfoBox
            heading={" For Renters"}
            backgroundColor="bg-gray-50"
            textColor="text-slate-800"
            buttonInfo={{
              backgroundColor: "bg-black",
              link: "/properties",
              text: "Browse Properties",
              textColor: "text-white",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-black"
            textColor="text-white"
            buttonInfo={{
              backgroundColor: "bg-emerald-600",
              link: "/properties/add",
              text: "Add Property",
              textColor: "text-white",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

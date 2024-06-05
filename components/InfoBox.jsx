import Link from "next/link";
import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} shadow sm:rounded-lg`}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className={`text-2xl font-bold leading-6 ${textColor}`}>
          {heading}
        </h3>
        <div className={`mt-2 max-w-xl   ${textColor}`}>
          <p>{children}</p>
        </div>
        <div className="mt-5">
          <Link
            href={buttonInfo.link}
            className={`inline-flex items-center justify-center rounded-md border border-transparent ${buttonInfo.backgroundColor} px-4 py-2 font-medium
            ${buttonInfo.textColor} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-${buttonInfo.backgroundColor} focus:ring-offset-2 sm:text-sm`}
          >
            {buttonInfo.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

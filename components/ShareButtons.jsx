import React from "react";
import { FaShare } from "react-icons/fa6";

const ShareButtons = ({ Property }) => {
  return (
    <button className=" gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
      <FaShare /> Share Buttons
    </button>
  );
};

export default ShareButtons;

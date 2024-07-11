import React from "react";
import { FaBookmark } from "react-icons/fa6";

const BookmarkButton = ({ Property }) => {
  console.log("bookmark ", Property);
  return (
    <button className="bg-black gap-2 hover:bg-white text-white hover:text-black font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
      <FaBookmark />
      Bookmark Property
    </button>
  );
};

export default BookmarkButton;

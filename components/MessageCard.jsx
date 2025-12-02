"use client";

import { deleteMessage, markMessageAsRead } from "@/app/actions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MessageCard = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const [created, setCreated] = useState("");

  useEffect(() => {
    setCreated(new Date(message.createdAt).toLocaleString());
  }, [message.createdAt]);

  const handleReadClick = async () => {
    const read = await markMessageAsRead(message._id);
    setIsRead(read);

    toast.success(`Marked as ${read ? "read" : "new"}`);
  };

  const handleDeleteClick = async () => {
    await deleteMessage(message._id);
    setIsDeleted(true);

    toast.success(`Message Deleted`);
  };

  if (isDeleted) {
    return <p>-Message deleted-</p>;
  }
  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && (
        <div className="px-2 py-1 absolute top-2 right-2 bg-yellow-500 rounded-md text-white">
          New
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry:</span>{" "}
        {message.property.name}
      </h2>
      <p className="text-gray-700">{message.body}</p>

      <ul>
        <li>
          <strong>Reply email:</strong>{" "}
          <a
            href={`mailto:${message.email}`}
            className="hover:underline text-blue-500"
          >
            {message.email}{" "}
          </a>
        </li>
        <li>
          <strong>Reply phone:</strong>{" "}
          <a
            href={`tel:${message.phone}`}
            className="hover:underline text-blue-500"
          >
            {message.phone}{" "}
          </a>
        </li>
        <li>
          <strong>Recieved:</strong> {created}
        </li>
      </ul>

      <button
        onClick={handleReadClick}
        className="mt-4 mr-3 bg-teal-800 text-white py-1 px-3 rounded-md"
      >
        {isRead ? "Mark as new" : "Mark as read"}
      </button>
      <button
        onClick={handleDeleteClick}
        className="mt-4 bg-red-600 text-white py-1 px-3 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default MessageCard;

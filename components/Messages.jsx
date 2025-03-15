"use client";

import { useEffect, useState } from "react";

const Messages = () => {
  const [Messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch("/api/message");
        if (response == 200) {
          const responseData = await response.json();
          setMessages(responseData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, []);

  return <div>Messages</div>;
};

export default Messages;

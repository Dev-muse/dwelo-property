import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitMessageBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-primary hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="submit"
      disabled={pending}
    >
      <FaPaperPlane className="mr-2" />
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
};

export default SubmitMessageBtn;

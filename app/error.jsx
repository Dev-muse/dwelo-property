"use client";
import Link from "next/link";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = ({ error }) => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">Error</h1>

        <FaExclamationCircle className="text-5xl text-center text-red-400 mx-auto" />
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">{error.toString()}</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

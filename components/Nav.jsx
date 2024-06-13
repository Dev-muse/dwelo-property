"use client";

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import profileDefault from "@/assets/images/profile.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [showProfileMenu, setshowProfileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const path = usePathname();
  console.log(path);
  return (
    <Disclosure as="nav" className="bg-white shadow mb-0.5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  {/* logo */}
                  <img
                    className="block h-48 w-auto lg:hidden"
                    src="/logo.svg"
                    alt="Dwelo logo"
                  />
                  {/* logo */}
                  <img
                    className="hidden h-48 w-auto lg:block"
                    src="/logo.svg"
                    alt="Dwelo logo"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-emerald-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href="/"
                    className={`${
                      path == "/"
                        ? "inline-flex items-center border-b-2 border-emerald-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/properties"
                    className={`${
                      path == "/properties"
                        ? "inline-flex items-center border-b-2 border-emerald-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    Properties
                  </Link>
                  {isLoggedIn && (
                    <Link
                      href="/properties/add"
                      className={`${
                        path == "/properties/add"
                          ? "inline-flex items-center border-b-2 border-emerald-500 px-1 pt-1 text-sm font-medium text-gray-900"
                          : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      Add Property
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {!isLoggedIn && (
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="divide-x-2  divide-white relative inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      <FaGoogle className="-ml-1 mr-2 h-5 w-5" />
                      <span className="">&nbsp;&nbsp;Login or Register</span>
                    </button>
                  </div>
                )}
                {isLoggedIn && (
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    <Link href="/messages" className="relative group">
                      <button
                        type="button"
                        className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                          />
                        </svg>
                      </button>
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        2
                        {/* <!-- Replace with the actual number of notifications --> */}
                      </span>
                    </Link>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            alt=""
                            src={profileDefault}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Saved Properties
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-emerald-50 border-emerald-500 text-emerald-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                className={`${
                  path == "/"
                    ? "block border-l-4 border-emerald-500 bg-emerald-50 py-2 pl-3 pr-4 text-base font-medium text-emerald-700 sm:pl-5 sm:pr-6"
                    : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                }`}
                href={"/"}
              >
                Home
              </Link>

              <Link
                href={"/properties"}
                className={`${
                  path == "/properties"
                    ? "block border-l-4 border-emerald-500 bg-emerald-50 py-2 pl-3 pr-4 text-base font-medium text-emerald-700 sm:pl-5 sm:pr-6"
                    : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                }`}
              >
                Properties
              </Link>

              {isLoggedIn && (
                <Link
                  href={"/properties/add"}
                  className={`${
                    path == "/properties/add"
                      ? "block border-l-4 border-emerald-500 bg-emerald-50 py-2 pl-3 pr-4 text-base font-medium text-emerald-700 sm:pl-5 sm:pr-6"
                      : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                  }`}
                >
                  Add Property
                </Link>
              )}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              {isLoggedIn && (
                <div className="flex items-center px-4 sm:px-6">
                  <div
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => setshowProfileMenu((prev) => !prev)}
                  >
                    <Image
                      className="h-10 w-10 rounded-full"
                      alt="profile image"
                      src={profileDefault}
                    />
                  </div>

                  <Link className="relative group ml-auto" href="/messages">
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      2
                      {/* <!-- Replace with the actual number of notifications --> */}
                    </span>
                  </Link>
                </div>
              )}
              {showProfileMenu && (
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                  >
                    Saved Properties
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

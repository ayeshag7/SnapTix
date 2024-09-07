"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-[#003060] w-full min-h-20 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse max-md:mt-2 max-md:mb-6">
          <Image
            src="/Images/snaptix-logo.png"
            alt="SnapTix Logo"
            width={64}
            height={64}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SnapTix</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Login Button */}
          <Link href="/login">
            <button
              type="button"
              className="text-white border-2 border-[#fe542b] bg-transparent hover:text-[#fe542b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mx-2"
            >
              Login
            </button>
          </Link>
          {/* Get Started Button */}
          <Link href="/signup">
            <button
              type="button"
              className="text-white bg-[#fe542b] hover:bg-white hover:text-[#fe542b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get Started
            </button>
          </Link>
          <button
            onClick={() => setHidden(!hidden)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#fe542b] focus:outline-none focus:ring-2"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#003060] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#003060]">
            <li>
              <Link href="/" className={`block py-2 px-3 rounded md:p-0 ${isActive("/") ? "text-[#fe542b]" : "text-white"} hover:text-[#fe542b]`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/concerts" className={`block py-2 px-3 rounded md:p-0 ${isActive("/concerts") ? "text-[#fe542b]" : "text-white"} hover:text-[#fe542b]`}>
                Concerts
              </Link>
            </li>
            <li>
              <Link href="/sports" className={`block py-2 px-3 rounded md:p-0 ${isActive("/sports") ? "text-[#fe542b]" : "text-white"} hover:text-[#fe542b]`}>
                Sports
              </Link>
            </li>
            <li>
              <Link href="/arts-theatre" className={`block py-2 px-3 rounded md:p-0 ${isActive("/arts-theatre") ? "text-[#fe542b]" : "text-white"} hover:text-[#fe542b]`}>
                Arts & Theatre
              </Link>
            </li>
            <li>
              <Link href="/family" className={`block py-2 px-3 rounded md:p-0 ${isActive("/family") ? "text-[#fe542b]" : "text-white"} hover:text-[#fe542b]`}>
                Family
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

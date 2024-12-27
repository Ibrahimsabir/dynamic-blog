"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false }),
      );
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header
      className={`${poppins.className}  text-gray-400  body-font shadow-lg`}
    >
      <div className="container mx-auto flex flex-wrap  items-center justify-between py-4 px-6">
        {/* Left: Date and Time */}
        <div className="text-gray-700 text-lg">
          <span>{currentDateTime}</span>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex items-center text-lg gap-6">
          <Link
            href="/"
            className="hover:text-red-800 transition duration-300 transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-red-800 transition duration-300 transform hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-red-800 transition duration-300 transform hover:scale-110"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-800 transition duration-300 transform hover:scale-110"
          >
            Contact
          </Link>
          <Link href={""}>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-red-800 transition duration-300">
              Facebook
              <FaArrowRightLong />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

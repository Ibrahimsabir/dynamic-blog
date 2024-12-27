"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const AuthorCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS with duration
  }, []);

  const handleClick = () => {
    // Reset AOS so animations are re-triggered
    Aos.refresh();
  };

  return (
    <div className={`${poppins.className} bg-white shadow-lg rounded mt-12 p-8 `}>
      <div className="flex items-center p-8">
        <Image
          src={"/images/profile-pic.jpg"}
          width={200}
          height={200}
          alt="Profile Picture"
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-700"
        />
        <div>
          <h1 className="text-2xl font-bold text-blue-700" data-aos="fade-left">
            Saleha Khan
          </h1>
          <p className="text-gray-700 animate-fade-in-up">
            Front-End developer{" "}
            <span className="text-red-500 font-bold text-xl"> | </span> UI/UX
            {" "}Designer{" "}
            <span className="text-red-500 font-bold text-xl"> | </span>
            Beauty Expert
          </p>
        </div>
      </div>
      <p className="mt-4 flex flex-col items-center justify-center text-gray-700 leading-relaxed">
        &quot I&aposm a Web Developer and SEO Expert, specializing in creating
        responsive websites and optimizing them for top search engine
        rankings. &quot
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href={"#"}
            className="text-blue-600 bg-white text-xl transition-transform duration-300 hover:scale-110"
          >
            <FaSquareFacebook />
          </Link>
          <Link
            href={"#"}
            className="ml-3 text-blue-700 bg-white border-2 text-xl transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter />
          </Link>
          <Link
            href={"#"}
            className="ml-3 text-red-500 bg-white text-xl transition-transform duration-300 hover:scale-110"
          >
            <FaYoutube />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/sualeha-khan-70b7972a9/"}
            className="ml-3 text-blue-600 text-xl bg-white transition-transform duration-300 hover:scale-110"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </span>
      </p>
    </div>
  );
};

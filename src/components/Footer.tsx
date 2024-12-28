import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const Footer = () => {
  return (
    <footer className={`${poppins.className} text-gray-600 body-font`}>
      <div className="container px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
        <div className=" ransition-transform duration-300 hover:scale-110">
          <Link
            href={"#navbar"}
            className="flex title-font font-medium items-center text-pink-500 ml-16 mb-4 md:mb-0 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            <Image
              src={"/images/FullLogo_Transparent.png"}
              alt="Tech Tune"
              width={100}
              height={75}
              mr-8
            />
          </Link>
        </div>
        <div className="ransition-transform duration-300 hover:scale-110">
          <span className=" text-gray-700 text-xl ml-4 ">Tech Tune</span>
        </div>
        <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-100 sm:py-2 sm:mt-0 mt-4">
          © 2024 Tech Tune IT solution
        </p>

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
      </div>
    </footer>
  );
};

"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const Mega = () => {
  const posts = [
    {
      id: "1",
      title: "The Essential Tools for Modern Web Developers",
      description:
        "Explore the best tools and frameworks every web developer should know in 2024. From cutting-edge JavaScript libraries to robust backend frameworks, this guide covers the essentials for building fast, scalable, and secure web applications. Learn how to streamline your workflow, improve code quality, and stay ahead of the curve in the ever-evolving web development landscape.",
      date: "2024-12-26",
      image: "/images/education.jpg",
    },
    {
      id: "2",
      title: "Frontend Development: Mastering React and Next.js",
      description:
        "A beginner-friendly guide to building scalable frontend apps with React and Next.js.",
      date: "2024-12-25",
      image: "/images/technology.jpg",
    },
    {
      id: "3",
      title: "Backend Development Basics: Node.js and Express",
      description:
        "Learn the fundamentals of creating robust backend APIs using Node.js and Express.",
      date: "2024-12-24",
      image: "/images/technology.jpg",
    },
    {
      id: "4",
      title: "10 Tips for Building Responsive Websites",
      description:
        "Make your websites look great on any device with these responsive design tips.",
      date: "2024-12-23",
      image: "/images/technology.jpg",
    },
    {
      id: "5",
      title: "Understanding the MERN Stack",
      description:
        "An introduction to the MERN stack for full-stack web development.",
      date: "2024-12-22",
      image: "/images/technology.jpg",
    },
    {
      id: "6",
      title: "CSS Grid vs. Flexbox: When to Use Each",
      description:
        "Learn the differences between CSS Grid and Flexbox and when to use them.",
      date: "2024-12-21",
      image: "/images/technology.jpg",
    },
    {
      id: "7",
      title: "Server-Side Rendering vs. Client-Side Rendering",
      description:
        "Understand the key differences between SSR and CSR and their use cases.",
      date: "2024-12-20",
      image: "/images/technology.jpg",
    },
    {
      id: "8",
      title: "How to Optimize Web Performance",
      description:
        "Tips and tricks to speed up your website and improve user experience.",
      date: "2024-12-19",
      image: "/images/technology.jpg",
    },
    {
      id: "9",
      title: "API Development: Best Practices",
      description:
        "Explore the best practices for building secure and scalable APIs.",
      date: "2024-12-18",
      image: "/images/education.jpg",
    },
    {
      id: "10",
      title: "Exploring the Future of Web Development in 2025",
      description:
        "What trends will shape the future of web development? Let’s explore.",
      date: "2024-12-17",
      image: "/images/technology.jpg",
    },
    {
      id: "11",
      title: "Top 5 Natural Skincare Tips for Glowing Skin",
      description:
        "Discover natural remedies to keep your skin healthy and radiant.",
      date: "2024-12-16",
      image: "/images/beauty.jpg",
    },
    {
      id: "12",
      title: "Makeup Hacks for Busy Moms",
      description: "Quick and easy makeup tips for moms on the go.",
      date: "2024-12-15",
      image: "/images/beauty.jpg",
    },
    {
      id: "13",
      title: "Hair Care: Preventing Damage from Heat Styling",
      description: "Tips to protect your hair while using heat styling tools.",
      date: "2024-12-14",
      image: "/images/baby-care.jpg",
    },
    {
      id: "14",
      title: "Winter Skincare Routine: Stay Hydrated and Protected",
      description:
        "Tips to keep your skin soft and moisturized during the cold season.",
      date: "2024-12-13",
      image: "/images/baby-stuff.jpg",
    },
    {
      id: "15",
      title: "Daily Beauty Habits for Long-Term Benefits",
      description:
        "Incorporate these beauty habits into your routine for lasting results.",
      date: "2024-12-12",
      image: "/images/jwellry.jpg",
    },
    // Add more posts as needed...
  ];

  const [visibleRows, setVisibleRows] = useState(2); // Initial number of rows to display
  const postsPerRow = 3; // Logical grouping but no direct layout impact due to Tailwind

  const handleShowMore = () => {
    setVisibleRows((prevRows) => prevRows + 1); // Show one more row on each click
  };

  const visiblePosts = posts.slice(0, visibleRows * postsPerRow);

  return (
    <div className={`${poppins.className} mt-8 shadow-lg `}>
      <h1 className="text-3xl font-bold text-center my-12 underline text-red-600 animate-color-change animate-fade-in">
        Exploring the world of Saleha&apos;s Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {visiblePosts.map((blog, index) => (
          <div className="fade-in" key={blog.id}>
            <div className="blog-card">
              <BlogCard post={blog} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>

      {visiblePosts.length < posts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-red-600 text-white px-6 py-2 my-12 rounded-md hover:bg-red-700 transition"
          >
            Visit More Blogs
          </button>
        </div>
      )}
    </div>
  );
};

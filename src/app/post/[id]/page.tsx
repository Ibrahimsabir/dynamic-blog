"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import { AuthorCard } from "@/components/AuthorCard";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Mock dynamic post data for testing
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

export default function Post({ params }: { params: { id: string } }) {
  // Find the matching post
  const { id } = params;
  const post = posts.find((post) => post.id === id);

  // Handle missing posts
  if (!post) {
    return (
      <div className={`${poppins.className} text-red-600 text-2xl`}>
        Post Not Found
      </div>
    );
  }

  // Helper to render paragraphs
  const renderParagraphs = (description: string) =>
    description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));

  return (
    <div className={`${poppins.className} max-w-3xl mx-auto p-5`}>
      <h1 className="md:text-4xl text-3xl my-6 font-semibold text-center text-red-600">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          width={1200}
          height={600}
          alt={post.title}
          className="object-cover w-full h-auto rounded-t-md shadow-lg"
        />
      )}
      <div className="p-6 mt-4 text-slate-700 text-lg">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}

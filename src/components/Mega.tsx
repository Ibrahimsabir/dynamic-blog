import React from "react";
import BlogCard from "./BlogCard";

export const Mega = () => {
  const salehaPosts = [
    {
      id: "1",
      title: "The Essential Tools for Modern Web Developers",
      description:
        "Explore the best tools and frameworks every web developer should know in 2024.",
      date: "2024-12-26",
      imageUrl: "../images/education.jpg",
    },
    {
      id: "2",
      title: "Frontend Development: Mastering React and Next.js",
      description:
        "A beginner-friendly guide to building scalable frontend apps with React and Next.js.",
      date: "2024-12-25",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "3",
      title: "Backend Development Basics: Node.js and Express",
      description:
        "Learn the fundamentals of creating robust backend APIs using Node.js and Express.",
      date: "2024-12-24",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "4",
      title: "10 Tips for Building Responsive Websites",
      description:
        "Make your websites look great on any device with these responsive design tips.",
      date: "2024-12-23",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "5",
      title: "Understanding the MERN Stack",
      description:
        "An introduction to the MERN stack for full-stack web development.",
      date: "2024-12-22",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "6",
      title: "CSS Grid vs. Flexbox: When to Use Each",
      description:
        "Learn the differences between CSS Grid and Flexbox and when to use them.",
      date: "2024-12-21",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "7",
      title: "Server-Side Rendering vs. Client-Side Rendering",
      description:
        "Understand the key differences between SSR and CSR and their use cases.",
      date: "2024-12-20",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "8",
      title: "How to Optimize Web Performance",
      description:
        "Tips and tricks to speed up your website and improve user experience.",
      date: "2024-12-19",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "9",
      title: "API Development: Best Practices",
      description:
        "Explore the best practices for building secure and scalable APIs.",
      date: "2024-12-18",
      imageUrl: "../images/education.jpg",
    },
    {
      id: "10",
      title: "Exploring the Future of Web Development in 2025",
      description:
        "What trends will shape the future of web development? Let’s explore.",
      date: "2024-12-17",
      imageUrl: "../images/technology.jpg",
    },
    {
      id: "11",
      title: "Top 5 Natural Skincare Tips for Glowing Skin",
      description:
        "Discover natural remedies to keep your skin healthy and radiant.",
      date: "2024-12-16",
      imageUrl: "../images/beauty.jpg",
    },
    {
      id: "12",
      title: "Makeup Hacks for Busy Moms",
      description: "Quick and easy makeup tips for moms on the go.",
      date: "2024-12-15",
      imageUrl: "../images/beauty.jpg",
    },
    {
      id: "13",
      title: "Hair Care: Preventing Damage from Heat Styling",
      description: "Tips to protect your hair while using heat styling tools.",
      date: "2024-12-14",
      imageUrl: "../images/baby-care.jpg",
    },
    {
      id: "14",
      title: "Winter Skincare Routine: Stay Hydrated and Protected",
      description:
        "Tips to keep your skin soft and moisturized during the cold season.",
      date: "2024-12-13",
      imageUrl: "../images/baby-stuff.jpg",
    },
    {
      id: "15",
      title: "Daily Beauty Habits for Long-Term Benefits",
      description:
        "Incorporate these beauty habits into your routine for lasting results.",
      date: "2024-12-12",
      imageUrl: "../images/jwellry.jpg",
    },
  ];

  return (
  <div className="my-8">
    <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the world of Saleha&apos Blogs

    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {salehaPosts.map((blog, index) => (
          <div className="fade-in"
            key={blog.id}>
                <div className="blog-card">
                    <BlogCard post={blog} isDarkBackground={index % 2 === 0}/>
                </div>
                </div>
         
        ))}
      </div>

  </div>
  )
};

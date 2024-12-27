import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; image: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  // Limit the description length
  const trimmedDescription = post.description.length > 100 
    ? `${post.description.slice(0, 70).trim()}...` 
    : post.description;

  return (
    <Card
      className={`${poppins.className} mx-auto p-4 w-auto h-[450px] flex flex-col justify-between 
      ${isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"} 
      rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 `}
    >
      {/* Image Section */}
      <Image
        src={post.image}
        alt={post.title}
        width={100}
        height={100}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      {/* Title */}
      <CardTitle className="text-lg font-semibold mt-4 text-center">
        {post.title}
      </CardTitle>

      {/* Description */}
      <CardContent className="text-sm text-center mt-2">
        {trimmedDescription}
      </CardContent>

      {/* Footer Section */}
      <div className="mt-4">
        <p
          className={`text-xs text-center mb-3 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <Link
          href={`/post/${post.id}`}
          className={`block text-center px-6 py-2 text-sm font-medium rounded hover:bg-red-500 transition 
          ${isDarkBackground ? "bg-black text-white" : "bg-blue-600 text-white"}`}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
}

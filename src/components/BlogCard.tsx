import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
  });

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; image: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`${poppins.className} p-4 ${isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'} 
      rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.image}
        alt={post.title}
        width={100}
        height={100}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>
      <br />
      <CardContent className="text-center">{post.description}</CardContent>
      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <Link
          href={`/post/${post.id}`}
          className={`w-1/2 text-center px-6 py-2 items-center text-white rounded hover:bg-red-500 
          ${isDarkBackground ? 'bg-black' : 'bg-blue-600'}`}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
}

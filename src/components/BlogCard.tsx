import React from 'react';
import {Card, CardContent, CardTitle} from "../components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
    
interface BlogCardProps {
    post: {id: string, title: string, description: string, date: string, imageUrl: string};
    isDarkBackground: boolean;
    }
export default function BlogCard( { post, isDarkBackground}: BlogCardProps) {
    return (
    <Card className={`p-4 ${isDarkBackground? 'bg-slate-800 text-white': 'text-slate-800'} rounded-Ig shadow-1g hover:shadow-xl transition-shadow duration-300`}>
    <Image 
       src={post.imageUrl}
       alt={post.title}
       width={100}
       height={100}
       className='w-full h-48 object-cover rounded-t-lg'

       />
       <CardTitle className={`text-xl font-normal mt-4 text-center`}>{post.title}</CardTitle>
    <br/>
    <CardContent className='text-center'>
        {post.description}
    </CardContent>
    <div className='flex flex-col items-center int-4'>
<p className={`text-sm mb-2 ${isDarkBackground? 'text-slate-400': 'text-slate-600'}`}>
     Published on: {new.Date(post.date).toLocalDateString()}
</p>
<Link href={`/post/${post.id}`}
className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-580 
    ${isDarkBackground? "bg-black hover:bg-red-500" : "bg-black hover:bg-red-500"}`}>
Read More
</Link>
</div>
       </Card>
    )
    }



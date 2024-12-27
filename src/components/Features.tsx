import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400','500','700'],
  subsets: ['latin'],

});
const Features = () => {
  return (
    <div className={`${poppins.className} bg-blue-700 text-white w-full h-auto p-6 `}>
        <div className='flex flex-col items-center justify-center mx-auto '>
        <h1 className='text-3xl text-center font-bold md:text-5xl lg:text-left animate-fade-in transition-all duration-500 ease-in-out
        transform hover:translate-y-[-5px] hover:text-slate-400 text-white '>Welcome to Saleha&aposs Tech Tune </h1>
        <p className='text-center m-4 mt-4 text-sm text-slate-300 sm:text-base md:mb-12 1g:mb-16 animate-fade-in-up delay-300 '>Your Ultimate IT Solution. Transform your business with our cutting-edge technology solutions, expert consulting services, and innovative approach. From cloud computing and cybersecurity to data analytics and software development, we&aposve got you covered.</p>
        </div>
        <div className="mx-auto max-w-full px-5">
<h1 className="text-[30px] font-bold text-center
my-8 text-slate-300 ">Exploring Our Services</h1>
</div>

<div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
{["Technology",
"Artificial Intelligence",
"HTML",
"Virtual Reality",
"Next Is",
"Web Development",
].map((category, index) => (
<div key={index}
className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer flex items-center justify-center text-slate-600">
<p className='text-center text-lg font-semibold'>{category}</p>
</div>
))}

</div>
<p
className="text-sm md:text-base ☐ text-slate-300 mb-6 px-4 animate-fade-in-down delay-100 mt-10">
Dive into our diverse range of categories, where you&aposll discover a wealth of knowledge and insights tailored to your interests. Each category features carefully curated blogs that explore the latest trends, innovative technologies, and essential skills in the world of web development and beyond. Whether you&aposre a budding developer, an experienced tech enthusiast, or simply curious about the digital landscape, there&aposs something here for everyone. Explore the categories below and expand your understanding of the dynamic tech frontier.
</p>
</div>
    
  )
}

export default Features
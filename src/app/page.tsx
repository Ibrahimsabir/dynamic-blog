import { AuthorCard } from "@/components/AuthorCard";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <AuthorCard/>
   </div>
  );
}

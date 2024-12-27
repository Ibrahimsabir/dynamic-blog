import { AuthorCard } from "@/components/AuthorCard";
import { Mega } from "@/components/Mega";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <Mega/>
    <AuthorCard/>
    
   </div>
  );
}

import { AuthorCard } from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Card/>
    <AuthorCard/>
    <CommentSection postId={postId}/>
   </div>
  );
}

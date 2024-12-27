"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

interface Comment {
  id: string;
  author: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setAuthorName(commentToEdit.author);
      setNewComment(commentToEdit.text);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className={`${poppins.className} mt-8 p-12`}>
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold my-2">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="my-2 bg-blue-500"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-blue-400">No Comment Yet</p>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <Input
          placeholder="Your Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full"
        />
        <Input
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full"
        />
        {editingCommentId ? (
          <Button
            onClick={handleSaveEditedComment}
            className="mt-2 bg-blue-500 text-white border-2 border-blue-700 hover:text-blue-700 hover:bg-white"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={handleAddComment}
            className="mt-2 bg-blue-500 text-white border-2 border-blue-700 hover:text-blue-700 hover:bg-white"
          >
            Add Comment
          </Button>
        )}
      </div>
    </div>
  );
}

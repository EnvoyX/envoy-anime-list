"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const CommentInput = ({ mal_id, user_email, username, item_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const textRef = useRef();
  const router = useRouter();
  const handleTextAreaInput = (e) => {
    e.preventDefault();
    const keyword = textRef.current.value;
    console.log(keyword);
    if (keyword.trim().length < 3) {
      setIsDisabled(true);
      setComment(e.target.value);
    }
    if (keyword.trim().length >= 3) {
      setIsDisabled(false);
      setComment(e.target.value);
    }
  };
  const handlePostComment = async (e) => {
    e.preventDefault();
    const data = { mal_id, user_email, comment, username, item_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.status === 200) {
      setIsCreated(postComment.isCreated);
      setComment("");
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col gap-3">
      {isCreated && <p className="text-color-primary">Comment sent.</p>}
      <textarea
        name=""
        id=""
        onChange={handleTextAreaInput}
        value={comment}
        className="w-full h-32 text-xl p-4"
        ref={textRef}
      ></textarea>
      <button
        onClick={handlePostComment}
        disabled={disabled}
        className="disabled:bg-color-dark disabled:text-gray-300 px-3 disabled:scale-100 disabled:border-none py-2 w-32 rounded-lg text-color-dark bg-color-accent hover:border hover:scale-105 hover:text-color-accent hover:bg-color-dark transition-all"
      >
        Send
      </button>
    </div>
  );
};

export default CommentInput;

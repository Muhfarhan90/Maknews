import React, { useState } from "react";
import { router } from "@inertiajs/react";

const BookmarkButton = ({ initialBookmarked = false, articleId }) => {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (loading) return;

    const prevBookmarked = bookmarked;
    const nextBookmarked = !prevBookmarked;

    // Optimistic update UI
    setBookmarked(nextBookmarked);
    setLoading(true);

    router.post(
      route("article.bookmark", articleId),
      {},
      {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          setLoading(false);
        },
        onError: () => {
          // Rollback UI jika gagal
          setBookmarked(prevBookmarked);
          setLoading(false);
        },
      }
    );
    console.log("Bookmark button clicked")
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`flex items-center gap-1 transition ${
        bookmarked ? "text-yellow-600" : "hover:text-yellow-600"
      }`}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={bookmarked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
      <span>{bookmarked ? "Disimpan" : "Bookmark"}</span>
    </button>
  );
};

export default BookmarkButton;

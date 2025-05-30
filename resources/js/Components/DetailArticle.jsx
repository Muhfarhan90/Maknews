import React, { useState } from "react";
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import { router } from "@inertiajs/react";
const DetailArticle = ({ article, totalLikes, isLiked, isBookmarked }) => {
    console.log(article);
    console.log(totalLikes);
    console.log(isLiked);
    console.log(isBookmarked);
    const formatDate = (dateString) => {
        return new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(dateString));
    };

    return (
        <div className="w-full max-w-4xl">
            <h1 className="text-2xl font-bold font-heading text-neutral-dark">
                {article.title}
            </h1>
            <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl my-4">
                {article.photo && (
                    <img
                        src={`/storage/${article.photo}`}
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                )}
            </div>
            <div
                className="max-w-none prose-strong:text-neutral-dark prose-p:text-neutral-dark font-body text-justify"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <div className="mt-4 text-sm text-neutral-dark/80 font-body">
                <p>Dipublish pada: {formatDate(article.created_at)}</p>
                {/* Section Like & Bookmark */}
                <div className="flex justify-center gap-4 items-center mt-2">
                    <LikeButton
                        initialLiked={isLiked}
                        initialLikesCount={totalLikes}
                        articleId={article.id}
                    />
                    <BookmarkButton
                        initialBookmarked={isBookmarked}
                        articleId={article.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailArticle;

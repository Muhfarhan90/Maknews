import React from "react";
import CommentItem from "./CommentItem";
import { Head } from "@inertiajs/react";
import HeadingSection from "./HeadingSection";

const CommentList = ({ comments }) => {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <HeadingSection heading="Daftar Komentar" />
            {comments.length > 0
                ? comments?.map((comment, index) => (
                      <CommentItem
                          key={index}
                          user={comment.user}
                          description={comment.description}
                      />
                  ))
                : "Belum ada komentar"}
        </div>
    );
};

export default CommentList;

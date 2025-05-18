import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { router, useForm } from "@inertiajs/react";

const CommentSection = ({ comments, currentUser, articleId }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        description: "",
        article_id: articleId,
        user_id: currentUser ? currentUser.id : null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!currentUser) {
            router.get(route("login"));
            return;
        }
        post(route("comment.store"), {
            onSuccess: () => reset("description"),
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CommentInput
                    user={currentUser}
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    disabled={processing}
                />
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </form>
            <CommentList comments={comments} />
        </div>
    );
};

export default CommentSection;

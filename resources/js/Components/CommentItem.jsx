import React from "react";

const CommentItem = ({ user, description }) => {
    return (
        <div className="rounded-2xl flex items-center gap-4 p-5 border-2 text-neutral-dark">
            <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                <img
                    src={`/storage/${user.photo}`}
                    alt="Foto"
                    className="w-full object-cover border"
                />
            </div>
            <div className="flex flex-col  gap-2">
                <h1 className="text-xl font-bold font-heading capitalize">
                    {user.name}
                </h1>
                <p className="text-base font-body text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CommentItem;

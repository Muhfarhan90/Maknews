import React from "react";

const AuthorCard = ({ author }) => {
    return (
        <div className="rounded-2xl flex items-center gap-4 p-5 border-2 text-neutral-dark">
            <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                <img src={`/storage/${author.photo}`} alt="Foto" className="w-full object-cover border" />
            </div>
            <div className="flex flex-col  gap-2">
                <h1 className="text-xl font-bold font-heading capitalize">
                    {author.name}
                </h1>
                <p className="text-base font-body text-justify">
                    {author.description}
                </p>
            </div>
        </div>
    );
};

export default AuthorCard;

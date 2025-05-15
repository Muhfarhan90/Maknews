import React from "react";

const HeadingSection = ({ heading = "Berita" }) => {
    return (
        <div className="mb-4 flex flex-col gap-1">
            <h1 className="text-2xl font-bold font-heading text-neutral-dark">{heading}</h1>
            <div className="w-[100px] h-1 bg-accent"></div>
        </div>
    );
};

export default HeadingSection;

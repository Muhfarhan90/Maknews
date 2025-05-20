import React from "react";
import banner from "../assets/banner-article.jpg";
const BannerArticle = ({ name, bannerImage }) => {
    return (
        <div className="relative max-h-[200px] rounded-2xl overflow-hidden">
            <img
                src={bannerImage ? `/storage/${bannerImage}` : banner}
                alt={name || "Banner"}
                className="w-full object-cover max-h-[200px]"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-heading text-neutral-dark capitalize">
                {name}
            </h1>
        </div>
    );
};

export default BannerArticle;

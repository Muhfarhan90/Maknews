import { Link } from "@inertiajs/react";
import React from "react";

const ArticleCard = ({ article, direction = "vertical" }) => {
    return (
        <Link
            href={`/homepage/${article.slug}`}
            className={`flex  ${(direction ===
                "vertical" ? "flex-col" : "flex-row")} bg-white border-2 border-gray-200 rounded-2xl shadow-sm p-3 hover:border-primary transition-all h-full min-w-[250px]`}
        >
            <div className="relative rounded-xl overflow-hidden h-48">
                <img
                    src={`/storage/${article.photo}`}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white font-body text-sm px-3 py-1 rounded-xl capitalize">
                    {article.category_article?.name}
                </div>
            </div>

            <div className="pt-2 flex flex-col justify-between h-[calc(100%-12rem)]">
                <h2 className="text-xl font-heading font-semibold text-neutral-dark leading-tight line-clamp-2">
                    {article.title}
                </h2>
                <p className="text-sm font-light font-body text-gray-500 mt-2">
                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
            </div>
        </Link>
    );
};

export default ArticleCard;

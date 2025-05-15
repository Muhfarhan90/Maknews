import React from "react";
import ArticleCard from "./ArticleCard";

const NewArticles = ({ articles, direction = "vertical" }) => {
    return (
        <div className={`flex ${direction === "vertical" ? "flex-col" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} gap-4`}>
            {articles.map((article, index) => (
                <ArticleCard
                    key={index}
                    article={article}
                    direction="vertical"
                />
            ))}
        </div>
    );
};

export default NewArticles;

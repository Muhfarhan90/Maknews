import React from "react";
import ArticleCard from "./ArticleCard";

const NewArticles = ({ articles, direction = "vertical" }) => {
    return (
        <div
            className={`gap-4 ${
                direction === "vertical"
                    ? "flex flex-col"
                    : "flex flex-row overflow-x-auto"
            }`}
        >
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

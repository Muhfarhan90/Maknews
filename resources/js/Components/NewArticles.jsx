import React from "react";
import ArticleCard from "./ArticleCard";

const NewArticles = ({ articles }) => {
    return (
        <div className="flex flex-col gap-8">
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

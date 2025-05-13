import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleCardContainer = ({ articles }) => {
    return (
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
};

export default ArticleCardContainer;

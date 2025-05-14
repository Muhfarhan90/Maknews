import React from "react";
import ArticleCard from "./ArticleCard";
import HeadingSection from "./HeadingSection";

const ArticleCardContainer = ({ articles }) => {
    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        article={article}
                        direction="vertical"
                    />
                ))
            ) : (
                <div className="col-span-full text-center py-8">
                    <p className="text-lg font-semibold text-neutral-dark">
                        Tidak ada artikel
                    </p>
                </div>
            )}
        </div>
    );
};

export default ArticleCardContainer;

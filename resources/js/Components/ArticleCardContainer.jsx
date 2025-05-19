import React from "react";
import ArticleCard from "./ArticleCard";
import HeadingSection from "./HeadingSection";

const ArticleCardContainer = ({ articles }) => {
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {articles.data.length > 0 ? (
                    articles.data.map((article, index) => (
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

        </div>
    );
};

export default ArticleCardContainer;

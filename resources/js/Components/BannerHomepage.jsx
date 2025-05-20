import { Link } from "@inertiajs/react";
import React from "react";
import ButtonAction from "./ButtonAction";

const BannerHomepage = ({ articles }) => {
    return (
        <div className="carousel w-full rounded-2xl mb-8">
            {articles.map((article, index) => (
                <div
                    key={article.id}
                    id={`slide${index + 1}`}
                    className="carousel-item relative w-full"
                >
                    <img
                        src={`/storage/${article.photo}`}
                        alt={article.slug}
                        className="w-full object-cover max-h-[300px]"
                    />
                    {/* Info */}
                    <div className="absolute bg-black/50 text-white p-4 sm:p-6 rounded-xl w-[90%] md:w-[70%] left-4 sm:left-8 bottom-4 sm:bottom-8">
                        <p className="text-sm mb-2 uppercase text-primary">
                            {article.category_article?.name}
                        </p>
                        <h2 className="uppercase text-base md:text-2xl font-bold mb-4">
                            {article.title}
                        </h2>
                        <Link
                            href={`/homepage/${article.slug}`}
                        >
                            <ButtonAction name="Baca Selengkapnya" />
                        </Link>
                    </div>
                    {/* Navigasi */}
                    <div className="absolute left-2 sm:left-5 right-2 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href={`#slide${
                                index === 0 ? articles.length : index
                            }`}
                            className="btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${
                                index === articles.length - 1 ? 1 : index + 2
                            }`}
                            className="btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default BannerHomepage;

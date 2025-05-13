import { Link } from "@inertiajs/react";
import React from "react";

const ArticleCard = ({ article }) => {
    return (
        <Link href={ `detail-article/${article.slug}`} className="card bg-base-100 w-96 shadow-sm border-2 rounded-xl p-2 hover:border-green-500">
                <figure className="relative rounded-xl">
                    <div className="badge badge-accent text-white capitalize absolute left-4 top-4">
                        {article.category_article.name}
                    </div>
                    <img
                        src={`/storage/${article.photo}`}
                        alt="Shoes"
                        className="w-full h-48 object-cover flex-shrink-0"
                    />
                </figure>
                <div className="card-body pt-4 px-2">
                    <h2 className="card-title text-2xl font-semibold">
                        {article.title}
                        {/* <div className="badge badge-secondary">
                                        NEW
                                    </div> */}
                    </h2>

                    <div className="card-actions justify-end">
                        <p className="font-light">
                            {new Date(article.created_at).toLocaleDateString(
                                "id-ID",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </p>{" "}
                    </div>
                </div>
            </Link>
    );
};

export default ArticleCard;

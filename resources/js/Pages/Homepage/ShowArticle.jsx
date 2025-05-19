import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import DetailArticle from "@/Components/DetailArticle";
import { Head, usePage } from "@inertiajs/react";
import NewArticles from "@/Components/NewArticles";
import HeadingSection from "@/Components/HeadingSection";
import AuthorCard from "@/Components/AuthorCard";
import CommentSection from "@/Components/CommentSection";
import { comment } from "postcss";

const ShowArticle = ({ article, new_articles, author, comments }) => {
    console.log(article);
    console.log(comments);
    console.log(new_articles);
    const { auth } = usePage().props;
    return (
        <div>
            <HomepageLayout>
                <Head title="Detail Article" />
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-8">
                        <div className="flex flex-col gap-8">
                            <DetailArticle article={article} />
                            <div>
                                <HeadingSection heading="Penulis" />
                                <AuthorCard author={author} />
                            </div>
                            <div>
                                <CommentSection
                                    comments={comments}
                                    currentUser={auth.user}
                                    articleId={article.id}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4  ">
                        <div className="flex flex-col">
                            <HeadingSection heading="Artikel Terbaru" />
                            <NewArticles articles={new_articles} direction="vertical" />
                        </div>
                    </div>
                </div>
            </HomepageLayout>
        </div>
    );
};

export default ShowArticle;

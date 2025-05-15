import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import DetailArticle from "@/Components/DetailArticle";
import { Head } from "@inertiajs/react";
import NewArticles from "@/Components/NewArticles";
import HeadingSection from "@/Components/HeadingSection";
import AuthorCard from "@/Components/AuthorCard";

const ShowArticle = ({ article, new_articles, author }) => {
    console.log(article);
    console.log(new_articles);
    return (
        <div>
            <HomepageLayout>
                <Head title="Detail Article" />
                <div className="flex gap-8">
                    <div className="flex flex-col gap-8">
                        <DetailArticle article={article} />
                        <div>
                            <HeadingSection heading="Penulis" />
                            <AuthorCard author={author} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <HeadingSection heading="Artikel Terbaru" />
                        <NewArticles articles={new_articles} />
                    </div>
                </div>
            </HomepageLayout>
        </div>
    );
};

export default ShowArticle;

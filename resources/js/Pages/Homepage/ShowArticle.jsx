import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import DetailArticle from "@/Components/DetailArticle";
import { Head } from "@inertiajs/react";
import NewArticles from "@/Components/NewArticles";
import HeadingSection from "@/Components/HeadingSection";

const ShowArticle = ({ article, new_articles }) => {
    console.log(article);
    console.log(new_articles);
    return (
        <div>
            <HomepageLayout>
                <Head title="Detail Article" />
                <div className="flex gap-8">
                    <DetailArticle article={article} />
                    <div className="flex flex-col">
                        <HeadingSection heading="Artikel Terbaru" />
                        <NewArticles articles={new_articles} />
                    </div>
                </div>
            </HomepageLayout>
        </div>
    );
};

export default ShowArticle;

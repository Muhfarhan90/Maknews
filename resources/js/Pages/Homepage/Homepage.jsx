import React from "react";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";
import HomepageLayout from "@/Pages/Layouts/HomepageLayout";
import HeadingSection from "@/Components/HeadingSection";
import ButtonAction from "@/Components/ButtonAction";
import NewArticles from "@/Components/NewArticles";
const Homepage = ({ articles, new_articles }) => {
    return (
        <div>
            <HomepageLayout>
                <Head title="Homepage" />
                <div className="">
                    <div className="flex justify-between">
                        <HeadingSection heading="Artikel Terpopuler" />
                        <ButtonAction name="Lihat Semua" />
                    </div>
                    <ArticleCardContainer articles={articles} />
                    <div className="mt-4">
                        <HeadingSection heading="Artikel Terbaru" />
                        <NewArticles articles={new_articles} direction="horizontal"/>
                    </div>
                </div>
            </HomepageLayout>
        </div>
    );
};

export default Homepage;

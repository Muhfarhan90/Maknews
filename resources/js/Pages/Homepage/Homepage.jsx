import React from "react";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";
import HomepageLayout from "@/Pages/Layouts/HomepageLayout";
import HeadingSection from "@/Components/HeadingSection";
import ButtonAction from "@/Components/ButtonAction";
const Homepage = ({ articles }) => {
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
                </div>
            </HomepageLayout>
        </div>
    );
};

export default Homepage;

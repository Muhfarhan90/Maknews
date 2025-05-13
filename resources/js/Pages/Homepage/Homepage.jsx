import React from "react";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";
import HomepageLayout from "@/Pages/Layouts/HomepageLayout";
const Homepage = ({ articles, categories }) => {
    console.log(articles);
    return (
        <div>
            <HomepageLayout categories={categories}>
                <Head title="Homepage" />

                <ArticleCardContainer articles={articles} />
            </HomepageLayout>
        </div>
    );
};

export default Homepage;

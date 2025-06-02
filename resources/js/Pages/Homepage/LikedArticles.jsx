import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";
import BannerArticle from "@/Components/BannerArticle";

const LikedArticles = ({ likedArticles }) => {
    console.log(likedArticles);
    return (
        <div>
            <HomepageLayout>
                <Head title="Homepage" />
                <div className="">
                    <BannerArticle name={"Artikel Disukai"} />
                    <ArticleCardContainer articles={likedArticles} />
                    <Pagination links={likedArticles.links} />
                </div>
            </HomepageLayout>
        </div>
    );
};

export default LikedArticles;

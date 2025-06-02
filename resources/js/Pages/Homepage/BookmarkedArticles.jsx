import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";
import BannerArticle from "@/Components/BannerArticle";

const BookmarkedArticles = ({ bookmarkedArticles }) => {
    console.log(bookmarkedArticles);
    return (
        <div>
            <HomepageLayout>
                <Head title="Homepage" />
                <div className="">
                    <BannerArticle name={"Artikel Disimpan"} />
                    <ArticleCardContainer articles={bookmarkedArticles} />
                    <Pagination links={bookmarkedArticles.links} />
                </div>
            </HomepageLayout>
        </div>
    );
};

export default BookmarkedArticles;

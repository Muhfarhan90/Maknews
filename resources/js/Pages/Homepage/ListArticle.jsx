import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";
import BannerArticle from "@/Components/BannerArticle";

const ListArticle = ({ articles, selectedCategory }) => {
    console.log(articles);
    console.log(selectedCategory);
    return (
        <div>
            <HomepageLayout>
                <Head title="Homepage" />
                <div className="">
                    <BannerArticle name={selectedCategory ? selectedCategory?.name : "Semua Artikel"} bannerImage={ selectedCategory ? selectedCategory?.photo_category : null} />
                    <ArticleCardContainer articles={articles} />
                    <Pagination links={articles.links} />
                </div>
            </HomepageLayout>
        </div>
    );
};

export default ListArticle;

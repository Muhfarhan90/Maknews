import React from "react";
import HomepageLayout from "../Layouts/HomepageLayout";
import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";
import ArticleCardContainer from "@/Components/ArticleCardContainer";

const ListArticle = ({ articles }) => {
    return (
        <div>
            <HomepageLayout>
                <Head title="Homepage" />
                <div className="">
                    <ArticleCardContainer articles={articles} />
                    <Pagination links={articles.links} />
                </div>
            </HomepageLayout>
        </div>
    );
};

export default ListArticle;

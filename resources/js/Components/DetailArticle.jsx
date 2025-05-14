import React from "react";

const DetailArticle = ({ article, new_articles }) => {
    function stripHtml(html) {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }
    return (
        <div className="w-[900px]">
            <h1 className="text-2xl font-bold font-heading text-neutral-dark">
                {article.title}
            </h1>
            <div className="w-[900px] h-[500px] overflow-hidden rounded-xl my-4">
                <img
                    src={`/storage/${article.photo}`}
                    alt=""
                    className="object-cover w-full h-full"
                />
            </div>
            <div
                className="max-w-none prose-strong:text-neutral-dark prose-p:text-neutral-dark font-body text-justify"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </div>
    );
};

export default DetailArticle;

import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import SearchBar from "@/Components/SearchBar";
const Index = ({ ...props }) => {
    console.log(props);
    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete the user?")) {
            return;
        }
        router.delete(route("articles.destroy", id));
    };

    function stripHtml(html) {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Articles
                    </h2>
                }
            >
                <Head title="articles" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {props.flash.success && (
                            <div className="mb-4 alert alert-success shadow-lg">
                                <span>{props.flash.success}</span>
                            </div>
                        )}
                        <div className="mb-4 flex items-center justify-between">
                            {/* Search Bar */}
                            <SearchBar routeName={"articles.index"} />
                            <Link
                                href={route("articles.create")}
                                className="btn btn-primary"
                            >
                                Create Article
                            </Link>
                        </div>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Content</th>
                                        <th>Photo</th>
                                        <th>Author</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.articles.length > 0 ? (
                                        props.articles.map((article, index) => (
                                            <tr key={article.id}>
                                                <th>{index + 1} </th>
                                                <td>{article.title}</td>
                                                <td>
                                                    {article.category_article
                                                        ? article
                                                              .category_article
                                                              .name
                                                        : "-"}
                                                </td>
                                                <td className="line-clamp-2 overflow-hidden">{stripHtml(article.content)}</td>
                                                <td>
                                                    {article.photo ? (
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={`/storage/${article.photo}`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        "No Image"
                                                    )}
                                                </td>
                                                <td>{article.user.name}</td>

                                                <td className="flex items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "articles.edit",
                                                            article.id
                                                        )}
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                article.id
                                                            )
                                                        }
                                                        className="btn btn-sm btn-error"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="text-center"
                                            >
                                                Data tidak ada
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Index;

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
        router.delete(route("category_articles.destroy", id));
    };
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Category Articles
                    </h2>
                }
            >
                <Head title="category_articles" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {props.flash.success && (
                            <div className="mb-4 alert alert-success shadow-lg">
                                <span>{props.flash.success}</span>
                            </div>
                        )}
                        <div className="mb-4 flex items-center justify-between">
                            {/* Search Bar */}
                            <SearchBar routeName={"category_articles.index"} />
                            <Link
                                href={route("category_articles.create")}
                                className="btn btn-primary"
                            >
                                Create Category
                            </Link>
                        </div>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Photo</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.category_articles.length > 0 ? (
                                        props.category_articles.map(
                                            (category, index) => (
                                                <tr key={category.id}>
                                                    <th>{index + 1} </th>
                                                    <td>{category.name}</td>
                                                    <td>
                                                        {category.photo_category ? (
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={`/storage/${category.photo_category}`}
                                                                    alt=""
                                                                />
                                                                </div>

                                                            </div>
                                                        ) : (
                                                            "No Image"
                                                        )}
                                                    </td>
                                                    <td className="flex items-center gap-2">
                                                        <Link
                                                            href={route(
                                                                "category_articles.edit",
                                                                category.id
                                                            )}
                                                            className="btn btn-sm btn-primary"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    category.id
                                                                )
                                                            }
                                                            className="btn btn-sm btn-error"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        )
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

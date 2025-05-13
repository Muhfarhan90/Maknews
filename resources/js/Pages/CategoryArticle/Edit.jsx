import React from "react";
import AuthenticatedLayout from "@/Pages/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
const Edit = ({ category_article }) => {
    console.log(category_article);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: category_article.name || "",
        photo_category: category_article.photo_category || "",
        _method: "put",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("category_articles.update", category_article));
    };
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit Category Article
                    </h2>
                }
            >
                <Head title="category_articles" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 bg-slate-400 p-4 rounded-md"
                        >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Category Article Name
                                </legend>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Category Articles Name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                                <p className="label">
                                    You can edit page title later on from
                                    settings
                                </p>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Pick a file
                                </legend>
                                <input
                                    type="file"
                                    className="file-input"
                                    name="photo_category"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData(
                                            "photo_category",
                                            e.target.files[0]
                                        )
                                    }
                                />
                                <label className="label">Max size 2MB</label>
                                {errors.photo_category && (
                                    <p className="text-red-500 text-sm">
                                        {errors.photo_category}
                                    </p>
                                )}
                            </fieldset>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={route("category_articles.index")}
                                        className="btn btn-secondary"
                                    >
                                        Kembali
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => reset()}
                                    >
                                        Reset
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-accent"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Edit;

import React, { useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Select from "@/Components/Select";

const Create = ({ user, category_articles }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        photo: "",
        category_article_id: "",
        user_id: user.id,
    });

    const quillRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.content || data.content.trim() === "") {
            alert("Content is required");
            return;
        }
        post(route("articles.store"), {
            forceFormData: true,
        });
        console.log(data);
    };

    useEffect(() => {
        const quill = new Quill("#editor", {
            theme: "snow",
            placeholder: "Tulis konten artikel di sini...",
        });

        quill.on("text-change", () => {
            setData("content", quill.root.innerHTML);
        });

        quillRef.current = quill;
    }, []);

    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create Article
                    </h2>
                }
            >
                <Head title="articles" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 bg-slate-400 p-4 rounded-md"
                            encType="multipart/form-data"
                        >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Article Title
                                </legend>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="article title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                                {errors.title && (
                                    <p className="text-red-500 text-sm">
                                        {errors.title}
                                    </p>
                                )}
                                <p className="label">
                                    You can edit page title later on from
                                    settings
                                </p>
                            </fieldset>
                            {category_articles.length > 0 && (
                                <Select
                                    options={category_articles}
                                    value={data.category_article_id}
                                    onChange={(e) =>
                                        setData(
                                            "category_article_id",
                                            e.target.value
                                        )
                                    }
                                    label="Pilih Kategori Artikel"
                                />
                            )}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Pick a file
                                </legend>
                                <input
                                    type="file"
                                    className="file-input"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData("photo", e.target.files[0])
                                    }
                                />
                                <label className="label">Max size 2MB</label>
                                {errors.photo && (
                                    <p className="text-red-500 text-sm">
                                        {errors.photo}
                                    </p>
                                )}
                            </fieldset>
                            <div>
                                <label className="block font-semibold mb-1">
                                    Content
                                </label>
                                <div id="editor" style={{ height: "300px" }} />
                                {errors.content && (
                                    <p className="text-red-500 text-sm">
                                        {errors.content}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={route("articles.index")}
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
                                        Store
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

export default Create;

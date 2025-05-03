import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
const Edit = ({ role }) => {
    console.log(role);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: role.name || "",
        _method: "put",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("roles.update", role));
    };
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit Role
                    </h2>
                }
            >
                <Head title="roles" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 bg-slate-400 p-4 rounded-md"
                        >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Role Name
                                </legend>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Role Name"
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
                            <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={route("roles.index")}
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

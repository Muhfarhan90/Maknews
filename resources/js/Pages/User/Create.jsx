import React from "react";
import AuthenticatedLayout from "@/Pages/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Select from "@/Components/Select";
const Create = ({ roles }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        role_id: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.store"));
    };
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create User
                    </h2>
                }
            >
                <Head title="Users" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 bg-slate-400 p-4 rounded-md"
                        >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Fullname
                                </legend>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Fullname"
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
                                    Email
                                </legend>
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                                <p className="label">
                                    You can edit page title later on from
                                    settings
                                </p>
                            </fieldset>
                            {roles.length > 0 && (
                                <Select
                                    options={roles}
                                    value={data.role_id}
                                    onChange={(e) =>
                                        setData("role_id", e.target.value)
                                    }
                                    label="Pilih Role"
                                />
                            )}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Password
                                </legend>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password}
                                    </p>
                                )}
                                <p className="label">
                                    You can edit page title later on from
                                    settings
                                </p>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Retype Password
                                </legend>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Confirm Password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                {errors.password_confirmation && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password_confirmation}
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
                                        href={route("users.index")}
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

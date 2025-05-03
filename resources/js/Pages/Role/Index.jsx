import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import SearchBar from "@/Components/SearchBar";
const Index = (props) => {
    console.log(props);
    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete the user?")) {
            return;
        }
        router.delete(route("roles.destroy", id));
    };
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Roles
                    </h2>
                }
            >
                <Head title="Roles" />
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {props.flash.success && (
                            <div className="mb-4 alert alert-success shadow-lg">
                                <span>{props.flash.success}</span>
                            </div>
                        )}
                        <div className="mb-4 flex items-center justify-between">
                            {/* Search Bar */}
                            <SearchBar routeName={"roles.index"}/>
                            <Link
                                href={route("roles.create")}
                                className="btn btn-primary"
                            >
                                Create Role
                            </Link>
                        </div>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.roles.length > 0 ? (
                                        props.roles.map((role, index) => (
                                            <tr key={role.id}>
                                                <th>{index + 1} </th>
                                                <td>{role.name}</td>
                                                <td className="flex items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "roles.edit",
                                                            role.id
                                                        )}
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(role.id)}
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

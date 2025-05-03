import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
const Homepage = (props) => {
    console.log(props);
    return (
        <div>
            <AuthenticatedLayout>
                <Head title="Homepage" />
                <h1>Homepage</h1>
            </AuthenticatedLayout>
        </div>
    );
};

export default Homepage;

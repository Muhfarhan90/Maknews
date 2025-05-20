import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import React from "react";

const HomepageLayout = ({ children }) => {
    const { categories } = usePage().props;
    return (
        <div className="bg-neutral-light">
            <Navbar categories={categories} />
            <div className="md:px-14 py-8 px-8">{children}</div>
            <Footer />
        </div>
    );
};

export default HomepageLayout;

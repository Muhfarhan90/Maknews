import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const HomepageLayout = ({ children, categories }) => {
    return (
        <div>
             <Navbar categories={categories}/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
};

export default HomepageLayout;

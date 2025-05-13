import React from "react";
// import logo from "../assets/logo.svg";
import logo from "../assets/logo-maknews.svg";
import SearchBar from "./SearchBar";
import { Link } from "@inertiajs/react";
const Navbar = ({ categories }) => {
    return (
        <div className="flex justify-between items-center p-4 px-10 border shadow-md">
            <div className="flex items-center">
                <Link href="/homepage">
                    <img src={logo} alt="" height={150} width={150} />
                </Link>
            </div>
            <div>
                <ul className="flex gap-4">
                    {categories.map((category, index) => (
                        <Link
                            href={route("homepage.index", {
                                category: category.name,
                            })}
                            key={index}
                            className="hover:text-green-500 capitalize"
                        >
                            {category.name}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex">
                <SearchBar routeName={"homepage.index"} />
                <button className="btn btn-primary ml-4">Login</button>
            </div>
        </div>
    );
};

export default Navbar;

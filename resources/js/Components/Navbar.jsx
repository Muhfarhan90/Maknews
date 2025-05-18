import React from "react";
// import logo from "../assets/logo.svg";
import logo from "../assets/logo-maknews.svg";
import SearchBar from "./SearchBar";
import { Link, usePage } from "@inertiajs/react";
import ButtonAction from "./ButtonAction";
const Navbar = ({ categories }) => {
    // Getting URL
    const { url } = usePage();
    console.log(url);
    const { auth } = usePage().props;
    console.log(auth);
    return (
        <div className="flex justify-between items-center py-4 px-14 shadow-md bg-neutral-dark text-neutral-light">
            <div className="flex items-center">
                {/* Logo */}
                <Link href="/homepage">
                    <img
                        src={logo}
                        alt=""
                        height={150}
                        width={150}
                        className="flex flex-shrink-0 drop-shadow-lg"
                    />
                </Link>
            </div>
            {/* Category */}
            <ul className="hidden md:flex gap-4">
                {/* Link Beranda */}
                <Link
                    href="/homepage"
                    className={`text-base capitalize font-body transition-all ${
                        url === "/homepage"
                            ? "text-primary font-bold underline underline-offset-8"
                            : "hover:text-primary hover:underline hover:underline-offset-8"
                    }`}
                >
                    Beranda
                </Link>
                {categories?.map((category, index) => {
                    const categoryUrl = route("homepage.index", {
                        category: category.name,
                    });
                    const isActive = url.includes(category.name);
                    return (
                        <Link
                            href={categoryUrl}
                            key={index}
                            className={`text-base capitalize font-body transition-all ${
                                isActive
                                    ? "text-primary font-bold underline underline-offset-8"
                                    : "hover:text-primary hover:underline hover:underline-offset-8 "
                            }`}
                        >
                            {category.name}
                        </Link>
                    );
                })}
            </ul>
            <div className="flex gap-4">
                <SearchBar routeName={"homepage.index"} />
                {auth?.user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn bg-primary rounded-field"
                        >
                            {auth.user.name}
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-secondary rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
                        >
                            <li>
                                <a>Profile</a>
                            </li>
                            <li>
                                <Link href={route("logout")} method="post">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <Link href={route("login")}>
                            <ButtonAction name="Login" type="button" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

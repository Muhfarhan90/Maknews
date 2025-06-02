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
        <div className="flex justify-between items-center py-4 px-8 md:px-14 shadow-md bg-neutral-dark text-neutral-light">
            <div className="flex items-center">
                {/* Logo */}
                <Link href={route("homepage")}>
                    <img
                        src={logo}
                        alt=""
                        height={150}
                        width={150}
                        className="flex flex-shrink-0 drop-shadow-lg"
                    />
                </Link>
            </div>
            {/* Menu Link */}
            <ul className="hidden md:flex flex-wrap gap-4">
                {/* Link Beranda */}
                <Link
                    href={route("homepage")}
                    className={`text-base capitalize font-body transition-all ${
                        url === "/homepage"
                            ? "text-primary font-bold underline underline-offset-8"
                            : "hover:text-primary hover:underline hover:underline-offset-8"
                    }`}
                >
                    Beranda
                </Link>
                <Link
                    href={route("homepage.articles")}
                    className={`text-base capitalize font-body transition-all ${
                        url === "/homepage/articles"
                            ? "text-primary font-bold underline underline-offset-8"
                            : "hover:text-primary hover:underline hover:underline-offset-8"
                    }`}
                >
                    Artikel
                </Link>
                {auth?.user && (
                    <div className="flex gap-4">
                        <Link
                            href={route("articles.bookmarked")}
                            className={`text-base capitalize font-body transition-all ${
                                url === "/homepage/bookmarked-articles"
                                    ? "text-primary font-bold underline underline-offset-8"
                                    : "hover:text-primary hover:underline hover:underline-offset-8"
                            }`}
                        >
                            Bookmarks
                        </Link>
                        <Link
                            href={route("articles.liked")}
                            className={`text-base capitalize font-body transition-all ${
                                url === "/homepage/liked-articles"
                                    ? "text-primary font-bold underline underline-offset-8"
                                    : "hover:text-primary hover:underline hover:underline-offset-8"
                            }`}
                        >
                            Liked
                        </Link>
                    </div>
                )}
                <div className="dropdown dropdown-down">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex gap-2 items-center text-base capitalize font-body transition-all hover:text-primary hover:underline hover:underline-offset-8"
                    >
                        Kategori
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-secondary rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                        {categories?.map((category, index) => {
                            const categoryUrl = route("homepage.articles", {
                                category: category.name,
                            });
                            const isActive = url.includes(category.name);
                            return (
                                <li>
                                    <Link
                                        href={categoryUrl}
                                        key={index}
                                        className={`text-base capitalize font-heading transition-all ${
                                            isActive
                                                ? "text-primary font-bold underline underline-offset-8"
                                                : "hover:text-primary hover:underline hover:underline-offset-8 "
                                        }`}
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </ul>
            <div className="flex gap-4">
                <SearchBar routeName={"homepage.articles"} />
                {auth?.user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn bg-primary hover:bg-primary/80 text-neutral-dark rounded-field"
                        >
                            {auth.user.name}
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-secondary rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
                        >
                            <li>
                                <Link href={route("profile.edit")}>
                                    Profile
                                </Link>
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

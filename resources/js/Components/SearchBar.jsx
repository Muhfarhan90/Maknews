import { router } from "@inertiajs/react";
import React, { useState } from "react";

const SearchBar = ({ routeName }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.get(
            route(routeName),
            { search: query },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };
    return (
        <form className="input" onSubmit={handleSubmit}>
            <button type="submit">
                <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
            </button>

            <input
                type="search"
                className="grow"
                placeholder="Search"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;

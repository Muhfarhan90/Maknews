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
        <form
            className="input rounded-lg text-black w-56"
            onSubmit={handleSubmit}
        >
            <button type="submit" className="border-r border-gray-300 pr-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-black"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>

            <input
                type="search"
                className="grow pl-0 font-body text-sm bg-transparent focus:outline-none focus:ring-0"
                placeholder="Pencarian pintar..."
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;

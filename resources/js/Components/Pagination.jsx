import React from "react";
import { router } from "@inertiajs/react";

const Pagination = ({ links }) => {
    const handlePageChange = (url) => {
        if (url) {
            router.visit(url, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    };

    return (
        <div className="flex justify-center mt-6 flex-wrap gap-2">
            {links.map((link, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(link.url)}
                    disabled={!link.url}
                    className={`px-3 py-1 rounded-lg text-sm border transition ${
                        link.active
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
};

export default Pagination;

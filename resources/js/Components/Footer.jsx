import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white shadow border border-top-2 border-gray-200 mt-10">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Maknews. All rights reserved.</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <a href="#" className="hover:underline">Tentang Kami</a>
                    <a href="#" className="hover:underline">Kontak</a>
                    <a href="#" className="hover:underline">Kebijakan Privasi</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                heading: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#7ed957",
                secondary: "#0097b2",
                accent: "#e63946",
                neutral: {
                    light: "#f8fafc",
                    dark: "#1f2937",
                },
            },
        },
    },

    plugins: [forms, daisyui, require("@tailwindcss/typography")],
};

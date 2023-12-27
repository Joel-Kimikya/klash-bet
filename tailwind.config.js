/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#03071C",
                "blue-light": "#1B9BEB",
                "red-light": "#E0243A",
                "yellow-light": "#FFBE1A",
                "black-light": "#1B1D2C",
                "notification-color": "#1B1C32",
                "black-card": "#111224",
            },
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({
                ".glow": {
                    textShadow: "0 0 10px #0f4c7d, 0 0 20px #0f4c7d, 0 0 30px #0f4c7d, 0 0 20px #0f4c7d, 0 0 25px #0f4c7d, 0 0 60px #0f4c7d, 0 0 35px #0f4c7d",
                },
            });
        }),
    ],
};
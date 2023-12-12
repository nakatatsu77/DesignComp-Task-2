/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "root-hero-pc": "url('/Images/root-hero-pc.jpg')",
        "root-hero-sp": "url('/Images/root-hero-sp.jpg')",
        raretech: "url('/Images/raretech.png')",
        envader: "url('/Images/envader.png')",
        development: "url('/Images/development.png')",
        development2: "url('/Images/development2.png')",
      },
    },
  },
  plugins: [],
};

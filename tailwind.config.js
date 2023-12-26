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
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "root-hero-pc": "url('/Images/root-hero-pc.jpg')",
        "root-hero-sp": "url('/Images/root-hero-sp.jpg')",
        raretech: "url('/Images/raretech.png')",
        envader: "url('/Images/envader.png')",
        development: "url('/Images/development.png')",
        development2: "url('/Images/development2.png')",
        development2: "url('/Images/development2.png')",
        mobile1: "url('/Images/mobile1.png')",
        mobile2: "url('/Images/mobile2.png')",
        works1: "url('/Images/works1.png')",
        works2: "url('/Images/works2.png')",
        works3: "url('/Images/works3.png')",
        works4: "url('/Images/works4.png')",
        works5: "url('/Images/works5.png')",
        works6: "url('/Images/works6.png')",
        "cta-pc": "url('/Images/cta-pc.jpg')",
        "cta-sp": "url('/Images/cta-sp.jpg')",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					0: "#81757d",
					10: "#8e838b",
					20: "#9c9298",
					30: "#a9a1a6",
					40: "#b7b0b5",
					50: "#c5bfc3",
				},
				surface: {
					0: "#121212",
					10: "#282828",
					20: "#3f3f3f",
					30: "#575757",
					40: "#717171",
					50: "#8b8b8b",
				},
				tonal: {
					0: "#1c1b1c",
					10: "#313031",
					20: "#474647",
					30: "#5f5e5f",
					40: "#777777",
					50: "#919091",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;

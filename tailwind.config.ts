import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			container: { center: true },
			colors: {
				beige: '#ac9b84',
				beigeLight: '#d5c7b5',
				dark: '#171410',
				darkLight: '#2e2b27',
				gray: '#8b8987',
			},
		},
	},
	plugins: [],
} satisfies Config;

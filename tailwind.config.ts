import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			container: { center: true },
			colors: {
				primary: '#000000',
				secondary: '#ffffff',
			},
		},
	},
	plugins: [],
} satisfies Config;

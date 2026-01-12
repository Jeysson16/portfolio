/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#0a0a0a',
				primary: '#0a0a0a',
				secondary: '#171717',
				accent: {
					DEFAULT: '#8b5cf6', // Violet
					cyan: '#06b6d4',
					violet: '#8b5cf6',
				}
			},
			fontFamily: {
				sans: ['Onest Variable', 'Inter', 'sans-serif'],
			},
			animation: {
				'blob': 'blob 7s infinite',
			},
			keyframes: {
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				}
			}
		},
	},
	plugins: [],
}

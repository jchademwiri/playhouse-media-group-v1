/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				body: '#17171F',
				primary: '#3F3FFF',
				secondary: '#A3A3FF',
				accent: '#FDA50F',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

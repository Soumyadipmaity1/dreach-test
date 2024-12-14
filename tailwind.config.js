/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	'./pages/**/*.{js,ts,jsx,tsx,mdx}',
	'./components/**/*.{js,ts,jsx,tsx,mdx}',
	'./app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
	extend: {
		screens: {
			"2xlg": "1440px",
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
			'xl': '1rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				brand: {
					primary: '#30acda',
					secondary: '#125872',
					light: '#e6f6fc',
					dark: '#0d3f52',
				},
				primary: '#007AFF',
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-5px)' }
			},
			'pulse-soft': {
				'0%, 100%': { opacity: 1 },
				'50%': { opacity: 0.8 }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'float': 'float 3s ease-in-out infinite',
			'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
		},
		boxShadow: {
			'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
			'strong': '0 0 50px -12px rgba(0, 0, 0, 0.25)',
			'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			'glow': '0 0 15px rgba(66, 153, 225, 0.5)',
		},
		backdropBlur: {
			'xs': '2px',
		},
		transitionDuration: {
			'400': '400ms',
		},
		scale: {
			'102': '1.02',
		}
	},
},
plugins: [
	require("tailwindcss-animate"),
],
variants: {
	extend: {
		scale: ['group-hover'],
		translate: ['group-hover'],
	},
},
}
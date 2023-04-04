// packages
import { createTheme } from '@shopify/restyle';

const palette = {
	// neutral
	netural50: 'rgb(250 250 250)',
	neutral100: 'rgb(244 244 245)',
	neutral200: 'rgb(228 228 231)',
	neutral300: 'rgb(212 212 216)',
	neutral400: 'rgb(161 161 170)',
	neutral500: 'rgb(113 113 122)',
	neutral600: 'rgb(82 82 91)',
	neutral700: 'rgb(63 63 70)',
	neutral800: 'rgb(39 39 42)',
	neutral900: 'rgb(24 24 27)',
	// primary
	primary50: 'rgb(239 246 255)',
	primary100: 'rgb(219 234 254)',
	primary200: 'rgb(191 219 254)',
	primary300: 'rgb(147 197 253)',
	primary400: 'rgb(96 165 250)',
	primary500: 'rgb(59 130 246)',
	primary600: 'rgb(37 99 235)',
	primary700: 'rgb(29 78 216)',
	primary800: 'rgb(30 64 175)',
	primary900: 'rgb(30 58 138)',
	// secondary
	secondary50: 'rgb(240 253 244)',
	secondary100: 'rgb(220 252 231)',
	secondary200: 'rgb(187 247 208)',
	secondary300: 'rgb(134 239 172)',
	secondary400: 'rgb(74 222 128)',
	secondary500: 'rgb(34 197 94)',
	secondary600: 'rgb(22 163 74)',
	secondary700: 'rgb(21 128 61)',
	secondary800: 'rgb(22 101 52)',
	secondary900: 'rgb(20 83 45)',
	// tertiary
	tertiary50: 'rgb(254 242 242)',
	tertiary100: 'rgb(254 226 226)',
	tertiary200: 'rgb(254 202 202)',
	tertiary300: 'rgb(252 165 165)',
	tertiary400: 'rgb(248 113 113)',
	tertiary500: 'rgb(239 68 68)',
	tertiary600: 'rgb(220 38 38)',
	tertiary700: 'rgb(185 28 28)',
	tertiary800: 'rgb(153 27 27)',
	tertiary900: 'rgb(127 29 29)',
	// utils
	black: 'rgb(0 0 0)',
	white: 'rgb(255 255 255)',
};

const spacing = {
	xs: 4,
	s: 6,
	m: 8,
	l: 12,
	xl: 20,
	xxl: 52,
	xxxl: 72,
};

const theme = createTheme({
	borderRadii: {
		borderRadiusPrimary: spacing.xs,
		borderRadiusSecondary: spacing.s,
		borderRadiusTertiary: spacing.m,
		borderRadiusRound: 500,
	},
	breakpoints: {},
	colors: {
		backgroundPrimary: palette.black,
		backgroundSecondary: palette.neutral900,
		backgroundTertiary: palette.neutral800,
		buttonActive: palette.primary400,
		foregroundPrimary: palette.white,
		foregroundSecondary: palette.neutral200,
		foregroundTertiary: palette.neutral400,
	},
	spacing,
	textVariants: {
		body: {
			fontFamily: 'montserrat',
			color: 'foregroundPrimary',
		},
		header: {
			fontFamily: 'montserrat-black',
			fontSize: 20,
			lineHeight: 36,
			color: 'foregroundPrimary',
		},
		subheader: {
			fontFamily: 'montserrat-bold',
			color: 'foregroundTertiary',
		},
	},
});

export type Theme = typeof theme;
export default theme;

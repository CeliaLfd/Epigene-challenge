import { remCalc } from "../utils/selectors";

export const colors = {
  white: "#FFF",

  // Primary
  primary: "hsl(270, 100%, 42%)",
  primaryLight: "hsl(270, 100%, 90%)",

  // Secondary
  secondary: "hsl(185, 82%, 83%)",
  secondaryLight: "hsl(185, 82%, 91%)",
  secondaryDark: "hsl(185, 82%, 39%)",

  //tertiary
  tertiary: "hsl(171, 95%, 44%)",

  // Grey
  grey50: "hsl(0, 0%, 95%)",
  grey100: "hsl(0, 0%, 87%)",
  grey200: "hsl(0, 0%, 58%)",
  grey300: "hsl(0, 0%, 40%)",
  grey400: "hsl(0, 0%, 22%)",
} as const;

export type Colors = keyof typeof colors;

export const defaultFontSize = 16;
export const fontFamily = `"Poppins", Arial, Helvetica, sans-serif`;

export const textSize = {
  default: remCalc(defaultFontSize),
  tiny: remCalc(10),
  small: remCalc(14),
  medium: remCalc(18),
  large: remCalc(20),
  xlarge: remCalc(24),
} as const;

export const fontWeight = {
  default: "normal",
  bold: "bold",
  semibold: "500",
} as const;

export type FontWeight = keyof typeof fontWeight;

export const spacings = {
  tiny: remCalc(4),
  xsmall: remCalc(8),
  small: remCalc(16),
  medium: remCalc(24),
  large: remCalc(32),
} as const;

export type Spacing = keyof typeof spacings;

export const transition = {
  prop: "all",
  duration: "300ms",
  timing: "cubic-bezier(.165, .84, .44, 1)",
  global: "all 300ms cubic-bezier(.165, .84, .44, 1)",
} as const;

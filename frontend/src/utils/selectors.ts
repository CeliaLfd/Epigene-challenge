import { rem } from "polished";
import { defaultFontSize } from "../style/theme";

export const remCalc = (value: number | string) => rem(value, defaultFontSize);

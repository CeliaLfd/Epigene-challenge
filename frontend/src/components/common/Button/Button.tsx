import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  colors,
  fontFamily,
  fontWeight,
  spacings,
  textSize,
  transition,
} from "../../../style/theme";

type ButtonProps = {
  level?: keyof typeof variants;
  size?: keyof typeof variantsSize;
};

const variants = {
  default: css`
    background-color: ${colors.primaryLight};
    color: ${colors.primary};
  `,
  secondary: css`
    background-color: ${colors.secondaryLight};
    color: ${colors.secondaryDark};
  `,
  grey: css`
    background-color: ${colors.grey50};
    color: ${colors.grey300};
  `,
  ghost: css`
    background-color: transparent;
    color: ${colors.grey300};
  `,
} as any;

const variantsHover = {
  default: css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `,
  secondary: css`
    background-color: ${colors.secondaryDark};
    color: ${colors.white};
  `,
  grey: css`
    background-color: ${colors.grey100};
  `,
  ghost: css`
    background-color: ${colors.grey100};
  `,
} as any;

const variantsSize = {
  default: css`
    padding: ${spacings.small} ${spacings.large};
  `,
  small: css`
    padding: ${spacings.xsmall} ${spacings.small};
    font-size: ${textSize.small};
  `,
  circle: css`
    width: ${spacings.large};
    height: ${spacings.large};
    border-radius: 100%;
  `,
} as any;

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  gap: ${spacings.small};
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-family: ${fontFamily};
  font-weight: ${fontWeight.semibold};
  text-align: center;
  transition: ${transition.global};
  cursor: pointer;
  outline: none;
  ${({ size = "default" }) => variantsSize[size]};
  ${({ level = "default" }) => variants[level]};

  &:hover,
  &:focus {
    ${({ level = "default" }) => variantsHover[level]};
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
`;

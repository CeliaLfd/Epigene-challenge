import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, spacings, textSize } from "../../../style/theme";

type TagProps = {
  level?: keyof typeof variants;
};

const variants = {
  default: css`
    background-color: ${colors.tertiary};
    color: ${colors.white};
  `,
  hollow: css`
    border: 1px solid ${colors.secondary};
    color: ${colors.secondaryDark};
  `,
} as any;

export const Tag = styled.span<TagProps>`
  display: inline-block;

  padding: ${spacings.tiny} ${spacings.xsmall};
  font-size: ${textSize.small};
  line-height: 1;
  border-radius: 6px;
  ${({ level = "default" }) => variants[level]};
`;

import styled from "@emotion/styled";
import { colors, FontWeight, fontWeight, textSize } from "../../../style/theme";

type TypographyProps = {
  weight?: FontWeight;
};

export const Text = styled.p<TypographyProps>`
  margin-bottom: 0;
  color: ${colors.grey400};
  font-size: ${textSize.default};
  font-weight: ${({ weight = "default" }) => fontWeight[weight]};
`;

export const H1 = styled(Text)`
  font-weight: bold;
  font-size: ${textSize.xlarge};
`;

export const H2 = styled(Text)`
  font-weight: bold;
  font-size: ${textSize.large};
`;

export const TextSecondary = styled(Text)`
  color: ${colors.grey200};
`;

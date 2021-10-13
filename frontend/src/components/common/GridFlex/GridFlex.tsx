import styled from "@emotion/styled";
import { Spacing, spacings } from "../../../style/theme";

type GridFlexProps = {
  gap?: Spacing;
  verticalAlignment?: "center" | "flex-start" | "flex-end" | "baseline";
  horizontalAlignment?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
};

const GridFlex = styled.div<GridFlexProps>`
  display: flex;
  gap: ${({ gap }) => gap && spacings[gap]};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;

export const Row = styled(GridFlex)`
  flex-direction: row;
  align-items: ${({ verticalAlignment }) => verticalAlignment};
  justify-content: ${({ horizontalAlignment }) => horizontalAlignment};
`;

export const Column = styled(GridFlex)`
  flex-direction: column;
  align-items: ${({ horizontalAlignment }) => horizontalAlignment};
  justify-content: ${({ verticalAlignment }) => verticalAlignment};
`;

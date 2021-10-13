import styled from "@emotion/styled";
import { colors, fontWeight, spacings } from "../../../style/theme";
import { Column, Row } from "../GridFlex/GridFlex";

export const Table = styled(Column)``;

export const TableRow = styled(Row)`
  background: ${colors.white};
  border-radius: 8px;
  padding: ${spacings.small} ${spacings.medium};
`;

export const TableHead = styled(Row)`
  position: sticky;
  top: 10px;
  padding: ${spacings.xsmall} ${spacings.medium};
  border-radius: 8px;
  background: ${colors.grey100};
  font-weight: ${fontWeight.semibold};
  color: ${colors.grey200};
`;

type TableCellProps = {
  grow?: number;
  width?: string;
};

export const TableCell = styled.div<TableCellProps>`
  flex-grow: ${({ grow }) => grow && grow};
  flex-basis: ${({ width }) => width && width};
`;

import styled from "@emotion/styled";
import { colors, spacings, transition } from "../../../style/theme";

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${spacings.xsmall} ${spacings.small};
  border: 1px solid ${colors.grey100};
  border-radius: 6px;
  outline: 0;
  background-color: ${colors.white};
  transition: ${transition.global};
  font-size: 1rem;
  appearance: none;

  &:focus {
    background-color: ${colors.white};
    box-shadow: 0 0 0 4px ${colors.primaryLight};
    border-color: ${colors.primary};
    outline: none;
  }
`;

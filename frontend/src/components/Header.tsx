import styled from "@emotion/styled";
import logo from "../assets/epigenelogo.png";
import { colors, fontWeight, spacings, transition } from "../style/theme";
import { remCalc } from "../utils/selectors";
import { Column, Row } from "./common/GridFlex/GridFlex";
import { Text } from "./common/Typography/Typography";

const HeaderStyled = styled(Column)`
  grid-area: sidebar;
  width: 100%;
  height: 100%;
  gap: ${remCalc(80)};
  border-right: 1px solid ${colors.grey100};
  background-color: white;
`.withComponent("header");

const Head = styled(Row)`
  padding: ${spacings.medium};
`;

const Logo = styled.img`
  width: ${remCalc(50)};
`;

const Nav = styled(Column)``.withComponent("nav");

type BaseNavLinkProps = {
  isActive?: boolean;
};

const NavLink = styled.a<BaseNavLinkProps>`
  padding: ${spacings.tiny} ${spacings.medium};
  font-weight: ${fontWeight.semibold};
  color: ${({ isActive }) => (isActive ? colors.grey400 : colors.grey200)};
  transition: ${transition.global};

  ${({ isActive }) =>
    isActive &&
    `
      border-right: 2px solid ${colors.primary};
    `}

  &:hover {
    color: ${colors.grey400};
  }
`;

export const Header = () => (
  <HeaderStyled>
    <Head gap="small" verticalAlignment="center">
      <Logo src={logo} alt="epigene labs" />
      <Text weight="bold">Epigene Labs</Text>
    </Head>
    <Nav gap="medium">
      <NavLink href="/">Dashboard</NavLink>
      <NavLink href="/" isActive>
        Genelists
      </NavLink>
      <NavLink href="/">My account</NavLink>
    </Nav>
  </HeaderStyled>
);

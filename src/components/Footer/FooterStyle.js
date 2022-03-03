import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints, transitionEase } from "../../lib/style/theme";

export const FooterWrapper = styled.footer`
  background-color: ${colors.accentPrimary};
  padding: 30px;
`;

export const Inner = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NavColumn = styled.div`
  text-align: center;

  @media screen and (${breakpoints.tablet}) {
    text-align: left;
  }
`;

export const NavColumnTitle = styled.h4`
  color: ${colors.darkBlue};
  margin-bottom: 10px;
`;

export const NavColumnItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${colors.black};
  transition: ${transitionEase};
  font-size: 14px;
  padding: 10px 0;

  &.active {
    color: ${colors.blue};
  }

  &:hover {
    color: ${colors.blue};
  }

  &:last-child {
    padding: 10px 0 0 0;
  }
`;

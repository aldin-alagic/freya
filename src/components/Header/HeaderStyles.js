import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors, breakpoints, boxShadow } from '../../lib/style/theme';
import { ButtonDefault } from '../../lib/style/generalStyles';

export const HeaderWrapper = styled.header`
  background-color: ${colors.white};
  box-shadow: ${boxShadow};
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const Inner = styled.div`
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0;
    max-width: 993px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
  }
`;

export const LogoContainer = styled(NavLink)`
  display: block;
  width: 60px;
  color: ${colors.primary};

  @media screen and (${breakpoints.tablet}) {
    width: 70px;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: block;
    margin-left: auto;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font: bold 18px 'Montserrat', sans-serif;
  color: ${colors.black};
  display: inline-block;
  margin-top: 5px;
  margin-right: 32px;
  line-height: 63px;

  &:after {
    display: block;
    content: '';
    border-bottom: 4px solid ${colors.blue};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  &.active:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  &:last-child {
    margin-right: 0;
  }

  ${(props) => props.logout && LogoutButton};
`;

export const Hamburger = styled.div`
  width: 25px;
  margin-left: auto;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 100px;
  background-color: ${colors.darkBlack};
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HamburgerNav = styled.nav`
  position: fixed;
  top: 73px;
  height: calc(100% - 73px);
  width: 100%;
  background: ${colors.lightGrey};
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const HamburgerNavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  font: bold 24px 'Montserrat', sans-serif;
  color: ${colors.black};
  margin-bottom: 16px;

  &:hover {
    color: ${colors.blue};
  }

  &.active {
    color: ${colors.blue};
  }

  ${(props) => props.logout && LogoutButton};
`;

export const LogoutButton = css`
  ${ButtonDefault}

  color: ${colors.white}!important;
  background: ${colors.blue};
  display: inline-block;
  margin-top: auto;
  margin-bottom: 0;
  height: 56px;

  &:hover {
    border-color: ${colors.darkBlue};
    background: ${colors.darkBlue};
  }

  @media screen and (${breakpoints.tablet}) {
    width: 104px;
    height: 48px;
    line-height: 45px;
    margin-top: 0;

    &:after {
      display: none;
    }
  }
`;

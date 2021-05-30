import React, { useState } from 'react';

import {
  HeaderWrapper,
  Inner,
  LogoContainer,
  Logo,
  CloseHamburgerButton,
  Nav,
  NavItem,
  Hamburger,
  HamburgerLine,
  HamburgerNav,
  HamburgerNavItem,
} from './HeaderStyle';
import LogoImage from '../../assets/images/logo.png';

const Header = ({ onLogout }) => {
  const [isHamburgerNavOpened, setIsHamburgerNavOpened] = useState(false);

  const handleHamburgerClick = (isLogout = false) => {
    setIsHamburgerNavOpened(!isHamburgerNavOpened);

    if (isLogout) {
      onLogout();
    }
  };

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Logo src={LogoImage} alt="FAH logo" />
        </LogoContainer>
        <Hamburger onClick={() => handleHamburgerClick()}>
          {isHamburgerNavOpened ? (
            <CloseHamburgerButton size={32} />
          ) : (
            <>
              <HamburgerLine />
              <HamburgerLine />
              <HamburgerLine />
            </>
          )}
        </Hamburger>
        <Nav>
          <NavItem to="/" exact>
            Home
          </NavItem>
          <NavItem to="/solutions">Solutions</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
          <NavItem to="/" logout="true">
            Logout
          </NavItem>
        </Nav>
      </Inner>

      {isHamburgerNavOpened && (
        <HamburgerNav>
          <HamburgerNavItem to="/" exact onClick={() => handleHamburgerClick()}>
            Home
          </HamburgerNavItem>
          <HamburgerNavItem to="/solutions" exact onClick={() => handleHamburgerClick()}>
            Solutions
          </HamburgerNavItem>
          <HamburgerNavItem to="/login" onClick={() => handleHamburgerClick()}>
            Login
          </HamburgerNavItem>
          <HamburgerNavItem to="/register" onClick={() => handleHamburgerClick()}>
            Register
          </HamburgerNavItem>
          <HamburgerNavItem
            to="/"
            onClick={() => handleHamburgerClick()}
            logout="true">
            Logout
          </HamburgerNavItem>
        </HamburgerNav>
      )}
    </HeaderWrapper>
  );
};

export default Header;

import React, { useState } from "react";

import {
  HeaderWrapper,
  Inner,
  LogoContainer,
  Nav,
  NavItem,
  Hamburger,
  HamburgerLine,
  HamburgerNav,
  HamburgerNavItem,
} from "./HeaderStyles";
import LogoImage from "../../assets/images/logo.png";
import { IoCloseOutline } from "react-icons/io5";
import { Image } from "../../lib/style/generalStyles";

const Header = ({ onLogout, isLoggedIn }) => {
  const [isHamburgerNavOpened, setIsHamburgerNavOpened] = useState(false);

  const handleHamburgerClick = (isLogout = false) => {
    setIsHamburgerNavOpened(!isHamburgerNavOpened);
    if (isLogout) onLogout();
  };

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Image src={LogoImage} alt="FAH logo" />
        </LogoContainer>
        <Hamburger onClick={() => handleHamburgerClick()}>
          {isHamburgerNavOpened ? (
            <IoCloseOutline size={32} />
          ) : (
            <>
              <HamburgerLine />
              <HamburgerLine />
              <HamburgerLine />
            </>
          )}
        </Hamburger>
        <Nav>
          <NavItem to="/" exact>Home</NavItem>
          <NavItem to="/solutions">Solutions</NavItem>
          <NavItem to="/register">Register</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/login" logout="true">
            Logout
          </NavItem>
        </Nav>
      </Inner>

      {isHamburgerNavOpened && (
        <HamburgerNav>
          <HamburgerNavItem
            to="/"
            exact
            onClick={() => handleHamburgerClick()}
          >
            Home
          </HamburgerNavItem>
          <HamburgerNavItem
            to="/solutions"
            onClick={() => handleHamburgerClick()}
          >
            Solutions
          </HamburgerNavItem>
          <HamburgerNavItem
            to="/register"
            onClick={() => handleHamburgerClick()}
          >
            Register
          </HamburgerNavItem>
          <HamburgerNavItem to="/login" onClick={() => handleHamburgerClick()}>
            Login
          </HamburgerNavItem>
          <HamburgerNavItem
            to="/login"
            onClick={() => handleHamburgerClick(true)}
            logout="true"
          >
            Logout
          </HamburgerNavItem>
        </HamburgerNav>
      )}
    </HeaderWrapper>
  );
};

export default Header;

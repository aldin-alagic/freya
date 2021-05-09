import { HamburgerNavWrapper, NavItem } from "./HamburgerNavStyles";

const HamburgerNav = ({ onClick, opened }) => {
  return (
    <HamburgerNavWrapper opened={opened}>
      <NavItem onClick={onClick} to="/">Home</NavItem>
      <NavItem  onClick={onClick} to="/login">Login</NavItem>
      <NavItem  onClick={onClick} to="/register">Register</NavItem>
    </HamburgerNavWrapper>
  );
};

export default HamburgerNav;

import React from "react";

import {
  FooterWrapper,
  NavColumn,
  NavColumnTitle,
  NavColumnItem,
  Inner,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterWrapper>
      <Inner>
        <NavColumn>
          <NavColumnTitle>ABOUT</NavColumnTitle>
          <NavColumnItem to="/">Find Ask Hire</NavColumnItem>
          <NavColumnItem to="/">Privacy Policy</NavColumnItem>
          <NavColumnItem to="/">User Agreement</NavColumnItem>
        </NavColumn>
        <NavColumn>
          <NavColumnTitle>SUPPORT</NavColumnTitle>
          <NavColumnItem to="/faq">Frequently Asked Questions</NavColumnItem>
          <NavColumnItem to="/submit-ticket">Submit a ticket</NavColumnItem>
          <NavColumnItem to="/contact-us">Contact us</NavColumnItem>
        </NavColumn>
        <NavColumn>
          <NavColumnTitle>FOLLOW US</NavColumnTitle>
          <NavColumnItem to="/faq">Newsletter</NavColumnItem>
          <NavColumnItem to="/submit-ticket">Facebook</NavColumnItem>
          <NavColumnItem to="/contact-us">Twitter</NavColumnItem>
        </NavColumn>
      </Inner>
    </FooterWrapper>
  );
};

export default Footer;

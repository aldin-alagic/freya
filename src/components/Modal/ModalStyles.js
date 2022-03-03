import styled from 'styled-components';

import { colors, breakpoints, boxShadow } from '../../lib/style/theme';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${colors.blackOverlay};
  z-index: 1;
  overflow-y: auto;
  padding: 15px;
`;

export const Inner = styled.div`
  margin: 127px 0 57px 0;
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  box-shadow: ${boxShadow};

  @media screen and (${breakpoints.tablet}) {
    margin: 170px 40px 90px 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 648px;
    margin: auto;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  align-items: center;
  background: ${colors.blue};
  height: 74px;
  padding: 0 16px;
`;

export const Title = styled.h3`
  grid-column: 2;
  text-align: center;
  color: ${colors.white};
  font: bold 18px 'Montserrat', sans-serif;

  @media screen and (${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const CloseButton = styled.button`
  grid-column: 3;
  justify-self: end;
  color: ${colors.white};
  display: inherit;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const Body = styled.div`
  background: ${colors.white};
  padding: 24px 16px 16px 16px;

  @media screen and (${breakpoints.tablet}) {
    padding: 25px 48px 32px 48px;
  }
`;

export const Footer = styled.div`
  padding: 16px;
  background: ${colors.lightGrey};
  display: flex;
  @media screen and (${breakpoints.tablet}) {
    padding: 16px 48px;
  }
`;
export const FooterText = styled.p``;
export const FooterGrade = styled.span`
  font-weight: bold;
`;

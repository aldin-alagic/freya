import styled from 'styled-components';

import { colors, transitionEase, breakpoints } from '../../lib/style/theme';

export const ModalWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  background-color: ${colors.blackOverlay};
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 0 16px;
  position: relative;
  transition: ${transitionEase};

  @media screen and (${breakpoints.tablet}) {
    margin: 0 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 648px;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  height: 60px;
  padding: 0 20px;
`;

export const Title = styled.h3`
  text-align: center;
  color: ${colors.white};
  font: bold 18px 'Montserrat', sans-serif;

  @media screen and (${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const CloseButton = styled.button`
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
    padding: 24px 20px 20px 20px;
  }
`;

import styled from 'styled-components';

import { breakpoints, colors, transitionEase } from '../../lib/style/theme';

export const PanelWrapper = styled.section`
  background: ${colors.lightGrey};
  border-top: 3px solid ${colors.blue};
  position: fixed;
  top: 70px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 998;
  transition: ${transitionEase};

  padding: 0 16px;

  @media screen and (${breakpoints.tablet}) {
    padding: 0px 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  @media screen and (${breakpoints.tablet}) {
    padding-top: 60px;
    padding-bottom: 48px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  flex: 1 1 auto;
  @media screen and (${breakpoints.tablet}) {
    padding-bottom: 40px;
  }
`;

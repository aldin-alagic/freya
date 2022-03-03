import styled from 'styled-components';

import { colors, breakpoints } from '../../lib/style/theme';
import heroImage from '../../assets/images/hero.jpeg';

export const HeroWrapper = styled.section`
  background-image: url(${heroImage});
  height: 400px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Overlay = styled.div`
    background-color: ${colors.blackOverlay};
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (${breakpoints.mobileLarge}) {
      justify-content: flex-start;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 0 15px;

    @media screen and (${breakpoints.mobileLarge}) {
      padding: 0 25px;
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

export const Heading = styled.h1`
    color: ${colors.blue};
    line-height: 140%;
    margin-bottom: 10px;
    font-size: 20px;
    width: 100%;

    @media screen and (${breakpoints.mobileLarge}) {
      font-size: 24px;
    }

    @media screen and (${breakpoints.desktop}) {
      font-size: 28px;
    }
`;

export const Subheading = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${colors.white};
    line-height: 160%;
    width: 100%;
    margin-bottom: 32px;

    @media screen and (${breakpoints.tablet}) {
      font-size: 18px;
    }
`;

export const Options = styled.p`
  display: flex;
  column-gap: 16px;
`;
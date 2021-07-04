import styled from 'styled-components';

import { breakpoints } from '../../lib/style/theme';

export const SectionWrapper = styled.section`
  padding: 24px 16px 16px 16px;

  ${(props) =>
    props.withoutTopPadding &&
    `
    padding-top: 0;
  `};

  @media screen and (${breakpoints.tablet}) {
    padding: 60px 40px 24px 40px;

    ${(props) =>
      props.withoutTopPadding &&
      `
      padding-top: 0;
    `};
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 993px;
    margin: 0 auto;
    padding: 80px 0 48px 0;

    ${(props) =>
      props.withoutTopPadding &&
      `
      padding-top: 0;
    `};
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;

    ${(props) =>
      props.withoutTopPadding &&
      `
      padding-top: 0;
    `};
  }
`;

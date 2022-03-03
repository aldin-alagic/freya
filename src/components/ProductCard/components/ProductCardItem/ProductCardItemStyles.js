import styled from 'styled-components';
import { breakpoints } from './../../../../lib/style/theme';

export const ProductCardItemWrapper = styled.div`
  ${(props) => !props.isExpanded && 'display: none;'}

  @media screen and (${breakpoints.tablet}) {
    ${(props) => props.nowrap && 'white-space: nowrap;'}
  }

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 4px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 8px;
  }
`;

export const Content = styled.div`
  font: normal 16px/24px 'Montserrat', sans-serif;
  text-align: justify;
`;

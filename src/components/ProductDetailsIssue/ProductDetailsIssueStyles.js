import styled from 'styled-components';
import { breakpoints } from '../../lib/style/theme';

export const ProductDetailsIssueWrapper = styled.div`
  & ul li {
    flex-basis: 50%;
  }

  @media screen and (${breakpoints.tablet}) {
    & ul li {
      flex-basis: revert;
    }
  }
`;
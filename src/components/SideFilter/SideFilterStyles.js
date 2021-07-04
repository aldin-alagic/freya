import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/style/theme';

export const SideFilterWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  margin-top: auto;

  & button:first-child {
    margin-bottom: 16px;
  }

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;

    & button {
      width: 100%;
    }

    & button:first-child {
      margin-right: 16px;
      margin-bottom: 0;
    }
  }
`;
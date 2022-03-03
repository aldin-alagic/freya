import styled from 'styled-components';
import { breakpoints, colors, transitionEase } from '../../lib/style/theme';

export const StepperNavigatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 4px;
  border: 2px solid ${colors.blue};
  color: ${colors.white};
  background: ${colors.blue};
  transition: ${transitionEase};
  font: bold 18px/56px 'Montserrat', sans-serif;
  height: 48px;

  &:disabled {
    border: ${colors.darkGrey};
    background: ${colors.grey};
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
    border-color: ${colors.darkBlue};
    background: ${colors.darkBlue};
  }

  &:focus {
    outline: none;
    border-color: ${colors.darkBlue};
    background: ${colors.darkBlue};
  }

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 150px;
  }
`;
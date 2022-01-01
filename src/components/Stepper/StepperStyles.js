import styled from 'styled-components';

import { breakpoints, colors, transitionEase, boxShadow} from '../../lib/style/theme';

export const StepperWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background: ${colors.white};
  border-radius: 4px;
  padding: 24px 0 24px 0;
  transition: ${transitionEase};
	box-shadow: ${boxShadow};
`;

export const Step = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;

  &:before {
    border: solid 3px ${colors.blue};
    color: ${colors.blue};

    ${(props) => props.order && `content: "${props.order}"`};

    ${(props) => (props.isCurrent || props.isCompleted) &&
     `background: ${colors.blue};
      color: ${colors.white};`
    };

    ${(props) => props.hasError &&
     `background: ${colors.error};
      color: ${colors.white};
      border: solid 2px ${colors.error};
      `
    };

    size: 3rem;
    position: relative;
    z-index: 1;
    width: clamp(1.5rem, 5vw, 3rem);
    height: clamp(1.5rem, 5vw, 3rem);
    font-weight: 900;
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:not(:last-child):after {
    top: 0.8rem;
    content: "";
    position: relative;
    left: 50%;
    height: 3px;
    border-radius: 50px;
    background: ${colors.grey};
    order: -1;
    width: calc(100% - 3rem - calc(0.5rem * 2));
    left: calc(50% + calc(3rem / 2 + 0.5rem));

    ${(props) => props.isCompleted &&
     `background: ${colors.blue};`
    };

    @media screen and (${breakpoints.mobileLarge}) {
      top: 1.5rem;
    }
  }
`;

export const StepTitle = styled.h3`
  display: none;

  @media screen and (${breakpoints.mobileLarge}) {
    display: block;
  }
`;

export const StepDescription = styled.p`
  
`;
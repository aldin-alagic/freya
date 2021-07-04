import styled from 'styled-components';

import { colors, breakpoints, strongBoxShadow } from '../../lib/style/theme';

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;

  @media screen and (${breakpoints.tablet}) {
    ${(props) =>
      !props.modalToast &&
      `justify-content: flex-end;
    `};
    padding: 24px;
  }

  ${(props) =>
    props.modalToast &&
    `
      position: relative;
    `};
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  background: ${colors.successBackground};
  color: ${colors.success};
  box-shadow: ${strongBoxShadow};

  ${(props) =>
    props.isError &&
    `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};

  @media screen and (${breakpoints.tablet}) {
    width: fit-content;
  }
`;

export const Message = styled.p`
  margin-right: 16px;
`;

export const CloseButton = styled.button`
  display: block;
  text-decoration: none;
  background: none;
  border: none;
  color: inherit;
  padding: auto;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  & * {
    vertical-align: middle;
  }
`;

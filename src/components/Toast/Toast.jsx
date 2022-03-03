import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FadeIn } from 'animate-css-styled-components';

import { ToastWrapper, Inner, Message, CloseButton } from './ToastStyles';

const Toast = ({ message, isError, onClose, modalToast }) => {
  return (
    <FadeIn duration="0.3s">
      <ToastWrapper modalToast={modalToast}>
        <Inner isError={isError}>
          <Message>{message}</Message>
          <CloseButton>
            <IoClose size={16} onClick={onClose} />
          </CloseButton>
        </Inner>
      </ToastWrapper>
    </FadeIn>
  );
};

export default Toast;

import React from 'react';
import { FadeInDown } from 'animate-css-styled-components';
import { IoCloseCircleOutline } from 'react-icons/io5';

import {
  ModalWrapper,
  Header,
  Title,
  CloseButton,
  Inner,
  Body,
  Footer,
  FooterText,
  FooterGrade,
} from './ModalStyles';

const Modal = ({ title, children, isVisible, handleClose, grade }) => {
  if (isVisible === false) return null;

  return (
    <ModalWrapper isVisible={isVisible}>
      <FadeInDown>
        <Inner>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={() => handleClose()}>
              <IoCloseCircleOutline size={24} />
            </CloseButton>
          </Header>
          <Body>{children}</Body>
          {grade && (
            <Footer>
              <FooterText>
                Prosječna ocjena za ovo predavanje je &nbsp;{' '}
              </FooterText>
              <FooterGrade>{grade}</FooterGrade>
            </Footer>
          )}
        </Inner>
      </FadeInDown>
    </ModalWrapper>
  );
};

export default Modal;

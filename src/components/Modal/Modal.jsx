import React from "react";
import { FadeInDown } from "animate-css-styled-components";

import { IoCloseCircleOutline } from "react-icons/io5";
import {
  ModalWrapper,
  Header,
  Title,
  CloseButton,
  Inner,
  Body,
} from "./ModalStyles";

const Modal = ({ title, children, onClose }) => {
  return (
    <ModalWrapper>
      <FadeInDown>
        <Inner>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>
              <IoCloseCircleOutline size={24} />
            </CloseButton>
          </Header>
          <Body>{children}</Body>
        </Inner>
      </FadeInDown>
    </ModalWrapper>
  );
};

export default Modal;

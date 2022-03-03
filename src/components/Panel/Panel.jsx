import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FadeIn } from 'animate-css-styled-components';

import { PanelWrapper, Inner, Header, Body } from './PanelStyles';
import { Title } from '../../lib/style/generalStyles';

const Panel = ({ title, children, onClose }) => {
  return (
    <FadeIn duration="0.5s">
      <PanelWrapper>
        <Inner>
          <Header>
            <Title>{title}</Title>
            <IoClose size={28} onClick={onClose} />
          </Header>
          <Body>{children}</Body>
        </Inner>
      </PanelWrapper>
    </FadeIn>
  );
};

export default Panel;

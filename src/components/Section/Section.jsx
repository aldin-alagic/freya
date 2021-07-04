import React from 'react';

import { SectionWrapper } from './SectionStyles';

const Section = ({ children, withoutTopPadding }) => {
  return (
    <SectionWrapper withoutTopPadding={withoutTopPadding}>
      {children}
    </SectionWrapper>
  );
};

export default Section;

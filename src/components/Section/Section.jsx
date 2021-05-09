import React from "react";

import { SectionWrapper, Title } from "./SectionStyle";

const Section = ({ title, children, withoutTopPadding }) => {
  return (
    <SectionWrapper withoutTopPadding={withoutTopPadding}>
      {title && <Title>{title}</Title>}
      {children}
    </SectionWrapper>
  );
};

export default Section;

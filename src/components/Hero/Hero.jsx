import React from 'react';
import { ButtonOutlineLink } from '../../lib/style/generalStyles';

import { Content, Heading, HeroWrapper, Overlay, Subheading, Options } from './HeroStyles';

const Hero = () => (
	<HeroWrapper>
		<Overlay>
			<Content>
				<Heading>Quick and easy way to find a solution</Heading>
				<Subheading>Solutions are provided by subject-matter experts from all around the world</Subheading>
        <Options>
          <ButtonOutlineLink to="/solutions">Solutions</ButtonOutlineLink>
          <ButtonOutlineLink to="/solutions">Become an Expert</ButtonOutlineLink>
        </Options>
			</Content>
		</Overlay>
	</HeroWrapper>
);
export default Hero;

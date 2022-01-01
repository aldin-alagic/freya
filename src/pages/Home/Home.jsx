import React from 'react';

import { HomeWrapper, Inner } from './HomeStyles';
import Section from '../../components/Section/Section';
import { Header, SubTitle, Title } from '../../lib/style/generalStyles';
import Hero from '../../components/Hero/Hero';

const Home = () => {
	return (
		<HomeWrapper>
			<Hero />
			<Section>
				<Header></Header>
				<Inner></Inner>
			</Section>
		</HomeWrapper>
	);
};

export default Home;

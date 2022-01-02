import React from 'react';

import { HomeWrapper, Inner } from './HomeStyles';
import Section from '../../components/Section/Section';
import { Row } from '../../lib/style/generalStyles';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';

import solutionsImage from '../../assets/images/solutions.svg';
import questionsImage from '../../assets/images/questions.svg';
import interviewImage from '../../assets/images/interview.svg';

const Home = () => {
	return (
		<HomeWrapper>
			<Hero />
			<Section>
				<Row>
					<Card
						title="Find Solutions"
						description="Get answers to your issue by searching trough predefined categories."
						to="/solutions"
						image={solutionsImage}
					/>
					<Card
						title="Ask for Help"
						description="Can't find your solution? Just ask our validated experts from all around the world."
						to="#"
						image={questionsImage}
					/>
					<Card
						title="Hire Experts"
						description="Need extra help? No problem! Hire an expert per hour or per issue."
						to="#"
						image={interviewImage}
					/>
				</Row>
			</Section>
			<Section>
				<Row>
					<Card
						title="Find Solutions"
						description="Get answers to your issue by searching trough predefined categories. Each solutions has short description with detailed issue description."
						to="/solutions"
						image={solutionsImage}
					/>
					<Card title="Ask for Help" description="Can't find your solution? Just ask our validated experts from all around the world." />
					<Card title="Hire Experts" description="Need extra help? No problem! Hire an expert per hour or per issue." />
				</Row>
			</Section>
		</HomeWrapper>
	);
};

export default Home;

import React from 'react';
import {
	IoShieldCheckmarkOutline,
	IoRocketOutline,
	IoPeopleOutline,
	IoLayersOutline,
	IoAnalyticsOutline,
	IoTimeOutline,
	IoChatbubblesOutline,
	IoEarthOutline,
	IoSearchOutline,
} from 'react-icons/io5';

import { HomeWrapper, Benefits, SectionTitle } from './HomeStyles';
import Section from '../../components/Section/Section';
import { Row } from '../../lib/style/generalStyles';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import IconCard from '../../components/IconCard/IconCard';

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
						imageAlt="Find solutions"
					/>
					<Card
						title="Ask for Help"
						description="Can't find your solution? Just ask our validated experts from all around the world."
						to="#"
						image={questionsImage}
						imageAlt="Ask for help"
					/>
					<Card
						title="Hire Experts"
						description="Need extra help? No problem! Hire an expert per hour or per issue."
						to="#"
						image={interviewImage}
						imageAlt="Hire experts"
					/>
				</Row>
			</Section>
			<Benefits>
				<SectionTitle>What's great about it?</SectionTitle>
				<Section withoutTopPadding>
					<Row>
						<IconCard
							icon={<IoShieldCheckmarkOutline size={48} />}
							title="Validated solutions"
							description="Each solution is validated by field expert or user"
						/>
						<IconCard
							icon={<IoRocketOutline size={48} />}
							title="Direct access to experts"
							description="Chance to contact experts from all kinds of professions"
						/>
						<IconCard
							icon={<IoPeopleOutline size={48} />}
							title="Guided support by experts"
							description="Remote support from expert per hour or per issue"
						/>
					</Row>
				</Section>
				<SectionTitle>Why should experts use it?</SectionTitle>
				<Section withoutTopPadding>
					<Row hasPadding>
						<IconCard
							icon={<IoLayersOutline size={48} />}
							title="Centralized solution"
							description="Easy way to maintain your solution database as an expert"
						/>
						<IconCard
							icon={<IoAnalyticsOutline size={48} />}
							title="Analytics dashboard"
							description="Track stats, views, profit, and define your own monthly reports"
						/>
						<IconCard
							icon={<IoTimeOutline size={48} />}
							title="Virtual assistant"
							description="Earn money while you sleepc with platform that promotes you 24/7"
						/>
					</Row>
					<Row>
						<IconCard
							icon={<IoChatbubblesOutline size={48} />}
							title="Connect & Chat"
							description="Chance to talk and get support from experts around the world"
						/>
						<IconCard
							icon={<IoEarthOutline size={48} />}
							title="Worldwide market"
							description="Sell your solutions to the clients from all around the world"
						/>
						<IconCard icon={<IoSearchOutline size={48} />} title="Preferred Jobs" description="Search, bid, and accept jobs that you prefer" />
					</Row>
				</Section>
			</Benefits>
		</HomeWrapper>
	);
};

export default Home;

import React, { useState } from 'react';

import Section from '../../components/Section/Section';
import Panel from '../../components/Panel/Panel';
import ProductCard from './../../components/ProductCard/ProductCard';
import SideFilter from './../../components/SideFilter/SideFilter';
import DataLoader from './../../components/DataLoader/DataLoader';

import { SolutionsWrapper, Inner } from './SolutionsStyles';
import { Header, Title, Sidebar, ButtonText, ButtonGroup, ButtonOutlineGruped, InfoText, ProductCards } from '../../lib/style/generalStyles';
import { solutionsMock } from '../../lib/mock/solutions';

const Solutions = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isPanelVisible, setIsPanelVisible] = useState(false);
	const [solutionType, setSolutionType] = useState('all');
	const [filteredSolutions, setFilteredSolutions] = useState(solutionsMock);
	const [selectedSolution, setSelectedSolution] = useState(null);
	const [isLoading, setIsloading] = useState(false);
	const [isError, setIsError] = useState(false);

	const onSolutionsTypeChange = (type) => {
		setSolutionType(type);
	};

	const onSolutionClick = async (event) => {
		setSelectedSolution(event);
	};

	const handlePanelToggle = () => {
		setIsPanelVisible(!isPanelVisible);
	};

	const handlePanelClose = () => {
		setIsPanelVisible(false);
	};

	const solutionCards = () => {
		if (isError) {
			return <InfoText>Problem occured while trying to load solutions</InfoText>;
		} else if (isLoading) {
			return <DataLoader />;
		} else {
			return filteredSolutions.map((solution) => (
				<ProductCard
					key={solution.id}
					title={solution.title}
					price={solution.price}
					description={solution.description}
					expert={solution.expert}
					keywords={solution.keywords}
					onsolutionClick={() => onSolutionClick(solution)}
				/>
			));
		}
	};

	return (
		<SolutionsWrapper>
			<Section>
				<Header>
					<Title>Solutions</Title>
					<ButtonText onClick={handlePanelToggle}>Filter solutions</ButtonText>
					<ButtonGroup>
						<ButtonOutlineGruped isActive={solutionType === 'all'} onClick={() => onSolutionsTypeChange('all')}>
							All
						</ButtonOutlineGruped>
						<ButtonOutlineGruped isActive={solutionType === 'my'} onClick={() => onSolutionsTypeChange('my')}>
							My
						</ButtonOutlineGruped>
						<ButtonOutlineGruped isActive={solutionType === 'purchased'} onClick={() => onSolutionsTypeChange('purchased')}>
							Purchased
						</ButtonOutlineGruped>
					</ButtonGroup>
				</Header>
				<Inner>
					<Sidebar>
						<SideFilter />
					</Sidebar>
					<ProductCards>{solutionCards()}</ProductCards>
				</Inner>
			</Section>
			{isPanelVisible && (
				<Panel title="Solutions filter" onClose={handlePanelClose}>
					<SideFilter onClose={handlePanelClose} />
				</Panel>
			)}
		</SolutionsWrapper>
	);
};

export default Solutions;

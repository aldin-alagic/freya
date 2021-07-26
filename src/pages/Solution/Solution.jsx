import React, { useState } from 'react';

import Section from '../../components/Section/Section';

import { SolutionWrapper, Inner } from './SolutionStyles';
import {
	Header,
	Title,
	ButtonText,
	InfoText,
	ProductNav,
	ProductNavItem,
	ProductNavItemLink,
	ProductNavInner,
	ProductDetailsPanel,
	ProductDetailsVehicle,
	Pill,
	PillLabel,
	PillValue,
	HorizontalList,
	HorizontalListItem,
	HorizontalListItemLabel,
	HorizontalListItemValue,
} from '../../lib/style/generalStyles';

const Solution = () => {
	return (
		<SolutionWrapper>
			<Section withoutTopPadding>
				<Header>
					<Title>Solution for car brakes</Title>
				</Header>
				<Inner>
					<ProductNav aria-label="solution-navigation">
						<ProductNavInner>
							<ProductNavItem>
								<ProductNavItemLink>Vehicle</ProductNavItemLink>
							</ProductNavItem>
							<ProductNavItem>
								<ProductNavItemLink>Issue</ProductNavItemLink>
							</ProductNavItem>
							<ProductNavItem>
								<ProductNavItemLink>Solution</ProductNavItemLink>
							</ProductNavItem>
							<ProductNavItem>
								<ProductNavItemLink>Author</ProductNavItemLink>
							</ProductNavItem>
							<ProductNavItem>
								<ProductNavItemLink>Settings</ProductNavItemLink>
							</ProductNavItem>
						</ProductNavInner>
					</ProductNav>
					<ProductDetailsPanel>
						<ProductDetailsVehicle>
							<HorizontalList>
								<HorizontalListItem>
									<HorizontalListItemLabel>Brand</HorizontalListItemLabel>
									<HorizontalListItemValue>Volkswagen</HorizontalListItemValue>
								</HorizontalListItem>
								<HorizontalListItem>
									<HorizontalListItemLabel>Model</HorizontalListItemLabel>
									<HorizontalListItemValue>Golf</HorizontalListItemValue>
								</HorizontalListItem>
								<HorizontalListItem>
									<HorizontalListItemLabel>Year</HorizontalListItemLabel>
									<HorizontalListItemValue>2020</HorizontalListItemValue>
								</HorizontalListItem>
								<HorizontalListItem>
									<HorizontalListItemLabel>Variant</HorizontalListItemLabel>
									<HorizontalListItemValue>TDI</HorizontalListItemValue>
								</HorizontalListItem>
							</HorizontalList>
						</ProductDetailsVehicle>
					</ProductDetailsPanel>
				</Inner>
			</Section>
		</SolutionWrapper>
	);
};

export default Solution;

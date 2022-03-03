import React, { useState } from 'react';

import Section from '../../components/Section/Section';
import { SolutionWrapper, Inner } from './SolutionStyles';
import ProductDetailsVehicle from '../../components/ProductDetailsVehicle/ProductDetailsVehicle';
import {
	Header,
	Title,
	ProductNav,
	ProductNavItem,
	ProductNavInner,
	ProductDetailsPanel,
} from '../../lib/style/generalStyles';

import { solutionsMock } from '../../lib/mock/solutions';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetailsSolution from '../../components/ProductDetailsSolution/ProductDetailsSolution';
import ProductDetailsIssue from '../../components/ProductDetailsIssue/ProductDetailsIssue';
import ProductDetailsAuthor from '../../components/ProductDetailsAuthor/ProductDetailsAuthor';


const Solution = () => {
	var solution = solutionsMock[0];
	var { solution: solutionDetails, issue } = solution;

	return (
		<SolutionWrapper>
			<Section withoutTopPadding>
				<Header>
					<Title>{solution.title}</Title>
				</Header>
				<Inner>
					<ProductNav aria-label="solution-navigation">
						<ProductNavInner>
							<ProductNavItem to="vehicle">
								Vehicle
							</ProductNavItem>
							<ProductNavItem to="issue">
								Issue
							</ProductNavItem>
							<ProductNavItem to="solution">
								Solution
							</ProductNavItem>
							<ProductNavItem to="author">
								Author
							</ProductNavItem>
							<ProductNavItem to="settings">
								Settings
							</ProductNavItem>
						</ProductNavInner>
					</ProductNav>
					<ProductDetailsPanel>
						<Switch>
							<Route path="/solutions/:id/vehicle" 
								render={(props) => (
									<ProductDetailsVehicle
										{...props}
										vehicles={solutionDetails.vehicles}
										fuelType={solutionDetails.fuelType}
										transmission={solutionDetails.transmission}
									/>
								)}
							/>
							<Route path="/solutions/:id/issue" 
								render={(props) => (
									<ProductDetailsIssue
										{...props}
										description={issue.description}
										keywords={issue.keywords}
									/>
								)}
							/>
							<Route path="/solutions/:id/solution" 
								render={(props) => (
									<ProductDetailsSolution
										{...props}
										description={solutionDetails.description}
										tools={solutionDetails.tools}
										parts={solutionDetails.parts}
									/>
								)}
							/>
							<Route path="/solutions/:id/author" 
								render={(props) => (
									<ProductDetailsAuthor
										{...props}
									/>
								)}
							/>
							<Redirect to="/solutions/:id/vehicle" />
						</Switch>
					</ProductDetailsPanel>
				</Inner>
			</Section>
		</SolutionWrapper>
	);
};

export default Solution;

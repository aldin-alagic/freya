import React, { useState } from 'react';

import { SolutionCreateWrapper, Inner } from './SolutionCreateStyles';
import Section from '../../components/Section/Section';
import Stepper from '../../components/Stepper/Stepper';
import { Header, Title } from '../../lib/style/generalStyles';
import ProductCreateVehicle from '../../components/ProductCreateVehicle/ProductCreateVehicle';
import ProductCreateIssue from '../../components/ProductCreateIssue/ProductCreateIssue';
import ProductCreateSolution from '../../components/ProductCreateSolution/ProductCreateSolution';
import StepperNavigator from '../../components/StepperNavigator/StepperNavigator';
import ProductCreateReview from '../../components/ProductCreateReview/ProductCreateReview';

const SolutionCreate = () => {
	const steps = [{ title: 'Vehicle' }, { title: 'Issue' }, { title: 'Solution' }, { title: 'Review' }, { title: 'Finish' }];
	const brands = [
		{ value: 'Audi', label: 'Audi' },
		{ value: 'BMW', label: 'BMW' },
		{ value: 'Mercedes', label: 'Mercedes' },
	];
	const models = [
		{ value: '3', label: '3' },
		{ value: '5', label: '5' },
	];
	const variants = [{ value: 'M', label: 'M' }];
	const years = [
		{ value: '2000', label: '2000' },
		{ value: '2001', label: '2001' },
		{ value: '2002', label: '2002' },
	];

	const [currentStep, setCurrentStep] = useState(0);

	const handleStepChange = (step) => {
		setCurrentStep(step);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto',
		});
	};

	const renderCurrentStep = () => {
		switch (currentStep) {
			case 0:
				return <ProductCreateVehicle />;
			case 1:
				return <ProductCreateIssue />;
			case 2:
				return <ProductCreateSolution />;
			case 3:
				return <ProductCreateReview />;
			default:
				break;
		}
	};

	return (
		<SolutionCreateWrapper>
			<Section withoutTopPadding>
				<Header>
					<Title>Create Solution</Title>
				</Header>
				<Stepper steps={steps} currentStep={currentStep} onStepChange={handleStepChange} />
				<Inner>{renderCurrentStep()}</Inner>
				<StepperNavigator currentStep={currentStep} onStepChange={handleStepChange} />
			</Section>
		</SolutionCreateWrapper>
	);
};

export default SolutionCreate;

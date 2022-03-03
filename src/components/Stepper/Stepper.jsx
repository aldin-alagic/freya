import React from 'react';

import { Step, StepDescription, StepperWrapper, StepTitle } from './StepperStyles';

const Stepper = ({ steps, currentStep, hasError, onStepChange }) => {
	return (
		<StepperWrapper>
			{steps &&
				steps.map((step, index) => (
					<Step
						key={step.title}
						order={index + 1}
						isCurrent={currentStep == index}
						isCompleted={index < currentStep}
						hasError={currentStep == index && hasError}
						onClick={() => onStepChange(index)}
					>
						<StepTitle>{step.title}</StepTitle>
						<StepDescription>{step.description}</StepDescription>
					</Step>
				))}
		</StepperWrapper>
	);
};

export default Stepper;

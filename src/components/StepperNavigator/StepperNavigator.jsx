import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { StepperNavigatorWrapper, NavigationButton } from './StepperNavigatorStyles';

const StepperNavigator = ({ currentStep, onStepChange }) => {
	return (
		<StepperNavigatorWrapper>
			<NavigationButton disabled={currentStep == 0} onClick={() => onStepChange(currentStep - 1)}>
				<MdKeyboardArrowLeft size={30} />
			</NavigationButton>
			<NavigationButton disabled={currentStep == 4} onClick={() => onStepChange(currentStep + 1)}>
				<MdKeyboardArrowRight size={30} />
			</NavigationButton>
		</StepperNavigatorWrapper>
	);
};

export default StepperNavigator;

import React, { useState } from 'react';
import * as Yup from 'yup';

import Section from '../../components/Section/Section';
import DataLoader from './../../components/DataLoader/DataLoader';

import {
	Header,
	Title,
	Form,
	FormRow,
	CheckboxWrapper,
	InputLabel,
	InputText,
	InputCheckbox,
	InputError,
	Button,
	SuccessMessage,
} from '../../lib/style/generalStyles';

const Register = () => {
	return (
		<>
			<Section>
				<Header isCentered>
					<Title>Register</Title>
				</Header>
				<Form isCentered>
					<FormRow>
						<InputLabel htmlFor="firstName">First name</InputLabel>
						<InputText id="firstName" type="text" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="lastName">Last name</InputLabel>
						<InputText id="lastName" type="text" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="email">Email</InputLabel>
						<InputText id="email" type="email" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="password">Password</InputLabel>
						<InputText id="password" type="password" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="passwordConfirmation">Confirm password</InputLabel>
						<InputText id="passwordConfirmation" type="password" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="client">Select your role</InputLabel>
						<CheckboxWrapper>
							<InputCheckbox id="client" name="role" type="radio" />
							<InputLabel htmlFor="client" isRadio>
								Client
							</InputLabel>
							<InputCheckbox id="expert" name="role" type="radio" />
							<InputLabel htmlFor="expert" isRadio>
								Expert
							</InputLabel>
						</CheckboxWrapper>
					</FormRow>
					<FormRow>
						<Button type="submit" isFullWidth>Register</Button>
					</FormRow>
				</Form>
			</Section>
		</>
	);
};

export default Register;

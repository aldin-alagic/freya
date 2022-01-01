import React, { useState } from 'react';
import * as Yup from 'yup';

import Section from '../../components/Section/Section';
import DataLoader from './../../components/DataLoader/DataLoader';

import { Header, Title, Form, FormRow, InputLabel, InputText, InputError, Button, SuccessMessage } from '../../lib/style/generalStyles';

const Login = () => {
	return (
		<>
			<Section>
				<Header isCentered>
					<Title>Login</Title>
				</Header>
				<Form isCentered>
					<FormRow>
						<InputLabel htmlFor="email">Email</InputLabel>
						<InputText id="email" type="email" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="password">Password</InputLabel>
						<InputText id="password" type="password" />
					</FormRow>
					<FormRow>
						<Button type="submit" isFullWidth>Login</Button>
					</FormRow>
				</Form>
			</Section>
		</>
	);
};

export default Login;

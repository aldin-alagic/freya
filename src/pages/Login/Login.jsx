import React, { useState } from "react";
import * as Yup from "yup";

import Section from "../../components/Section/Section";
import DataLoader from './../../components/DataLoader/DataLoader';

import {
  Title,
  Form,
  FormRow,
  InputLabel,
  InputText,
  InputError,
  Button,
  SuccessMessage,
} from "../../lib/style/generalStyles";

const Login = () => {
  return (
    <>
      <Title>Login</Title>
      <Section withoutTopPadding>
        <Form centered>
          <FormRow>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputText id="email" type="email" />
          </FormRow>
          <FormRow>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputText id="password" type="password" />
          </FormRow>
          <FormRow>
            <Button type="submit">Login</Button>
          </FormRow>
        </Form>
      </Section>
    </>
  );
};

export default Login;

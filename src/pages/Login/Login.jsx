import React, { useState } from "react";
import * as Yup from "yup";

import Section from "../../components/Section/Section";
import Loading from "./../../components/Loading/Loading";
import {
  Title,
  Form,
  FormRow,
  InputLabel,
  InputText,
  InputError,
  ButtonSubmit,
  SuccessMessage,
} from "../../lib/style/generalStyles";

const Login = () => {
  return (
    <>
      <Title>Login</Title>
      <Section withoutTopPadding>
        <Form>
          <FormRow>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputText id="email" type="email" />
          </FormRow>
          <FormRow>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputText id="password" type="password" />
          </FormRow>
          <FormRow>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
          </FormRow>
        </Form>
      </Section>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import * as Yup from "yup";

import Section from "../../components/Section/Section";
import Loading from "./../../components/Loading/Loading";

import {
  Title,
  Form,
  FormRow,
  RadioWrapper,
  InputLabel,
  InputText,
  InputRadio,
  InputError,
  ButtonSubmit,
  SuccessMessage,
} from "../../lib/style/generalStyles";

const Register = () => {
  return (
    <>
      <Title>Register</Title>
      <Section withoutTopPadding>
        <Form>
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
            <InputLabel htmlFor="passwordConfirmation">
              Confirm password
            </InputLabel>
            <InputText id="passwordConfirmation" type="password" />
          </FormRow>
          <FormRow>
            <InputLabel htmlFor="client">
              Select your role
            </InputLabel>
            <RadioWrapper>
              <InputRadio id="client" name="role" type="radio"/>
              <InputLabel htmlFor="client" isRadio>
                Client
              </InputLabel>
              <InputRadio id="expert" name="role" type="radio"/>
              <InputLabel htmlFor="expert" isRadio>
                Expert
              </InputLabel>
            </RadioWrapper>
          </FormRow>
          <FormRow>
            <ButtonSubmit type="submit">Register</ButtonSubmit>
          </FormRow>
        </Form>
      </Section>
    </>
  );
};

export default Register;

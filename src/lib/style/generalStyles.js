import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints, transitionEase } from "../style/theme";

export const Grid = styled.div`
  display: grid;
  row-gap: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);

    ${(props) =>
      props.columns === 3 && `
      padding: 0 32px;
    `};
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);

    ${(props) =>
      props.columns === 3 && `
      padding: 0 84px;
    `};
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin: 32px 0;
  text-align: center;

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 1.7em;
  }

  @media screen and (${breakpoints.tablet}) {
    font-size: 2em;
  }
`;

export const ButtonDefault = css`
  display: block;
  text-decoration: none;
  width: 100%;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${colors.primary};
  border-radius: 6px;
  background: ${colors.primary};
  color: ${colors.white};
  transition: ${transitionEase};
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    cursor: pointer;
    border-color: ${colors.secondary};
    background: ${colors.secondary};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled(Link)`
  ${ButtonDefault}
`;

export const ButtonText = styled.button`
  font: 600 18px 'Montserrat', sans-serif;
  color: ${colors.black};
  background: none;
  border: none;

  &:hover {
    color: ${colors.blue};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const ButtonSubmit = styled.button`
  ${ButtonDefault}
`;

export const ButtonTable = styled.button`
  ${ButtonDefault}

  width: 160px;
  border-color: ${colors.black};
  background: ${colors.white};
  color: ${colors.black};
  font-weight: 600;

  &:hover {
    border-color: ${colors.green};
    background: ${colors.white};
    color: ${colors.green};
  }
`;

export const Main = styled.main`
  margin-top: 70px;
  flex: 1 0 auto;
  background: ${colors.lighterGrey};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Form = styled.form`
  margin: 0 auto;

  @media screen and (${breakpoints.mobileLarge}) {
    width: 400px;

    ${(props) =>
      props.fullWidth && `
        max-width: 100%;
    `};
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormTwoColumns = styled.div`
  margin-bottom: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    display: grid;
    grid-template-columns: repeat (2, 1fr);
    column-gap; 12px;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const RadioWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${colors.primary};

  ${(props) =>
    props.isCheckBox &&
     `margin-bottom: 0;`
  };

  ${(props) =>
    props.isRadio &&
     `
     margin-bottom: 0;
     margin-right: 16px;
     `
  };

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputText = styled.input`
  border: 1px solid ${colors.accentTwo};
  border-radius: 6px;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;

  &:focus {
    border-color: ${colors.secondary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.accentTwo};
  border-radius: 6px;
  width: 100%;
  line-height: 150%;
  padding: 10px;
  outline: none;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  min-width: 100%;

  &:focus {
    border-color: ${colors.secondary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputCheckbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
`;

export const InputRadio = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
`;

export const ButtonOutlineGruped = styled.button`
  ${ButtonDefault}

  font-weight: bold;
  color: ${colors.lightGrey};
  background: ${colors.white};
  border: 2px solid ${colors.lightGrey};

  &:hover {
    background: transparent;
    color: ${colors.primary};
    border-color: ${colors.primary};
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  ${(props) =>
    props.isActive &&
    `
      border: 2px solid ${colors.primary};
      color: ${colors.primary};
      border: 2px solid ${colors.primary}!important;
  `};

  @media screen and (${breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 180px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-contetn: center;
`;

export const Select = styled.select`
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  outline: none;
  font: normal 16px 'Montserrat', sans-serif;
  color: ${colors.black};

  &:focus {
    border-color: ${colors.secondary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const SelectOption = styled.option`
`;

export const InputError = styled.p`
  font-size: 14px;
  color: ${colors.error};
  padding-top: 8px;
`;

export const SuccessMessage = styled.p`
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 32px;
  border-radius: 6px;
  background: ${colors.successBackground};
  color: ${colors.success};
  
  ${props => props.isError && `
      background: ${colors.errorBackground};
      color: ${colors.error};
  `};

  @media screen and (${breakpoints.mobileLarge}){
      max-width: 400px;
  }
`;
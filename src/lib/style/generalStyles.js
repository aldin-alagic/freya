import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, transitionEase, breakpoints, boxShadow } from './theme';
import SearchIcon from './../../assets/images/search-icon.svg';

export const Main = styled.main`
  margin-top: 70px;
  flex: 1 0 auto;
  background: ${colors.lightGrey};
  ${(props) => props.isLogin && `margin-top: 0;`};
  height: max-content;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h1`
  font: bold 28px 'Montserrat', sans-serif;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 32px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 36px;
  }

  @media screen and (${breakpoints.desktop}) {
    line-height: 56px;
  }
`;

export const ButtonDefault = css`
  display: block;
  text-decoration: none;
  width: 100%;
  border: 2px solid ${colors.blue};
  border-radius: 4px;
  transition: ${transitionEase};
  font: bold 18px/56px 'Montserrat', sans-serif;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 232px;
  }
`;

export const InputDefault = css`
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  width: 100%;
  line-height: 56px;
  padding: 0 16px;
  outline: none;
  font-size: 16px;
  color: ${colors.black};

  &:focus {
    border-color: ${colors.blue};
  }
`;

export const Button = styled.button`
  ${ButtonDefault}

  color: ${colors.white};
  background: ${colors.blue};

  &:hover {
    border-color: ${colors.darkBlue};
    background: ${colors.darkBlue};
  }

  &:disabled {
    border: ${colors.darkGrey};
    background: ${colors.grey};
  }
`;

export const ButtonLink = styled(Link)`
  ${ButtonDefault}

  color: ${colors.white};
  background: ${colors.blue};

  &:hover {
    border-color: ${colors.darkBlue};
    background: ${colors.darkBlue};
  }
`;

export const ButtonOutline = styled.button`
  ${ButtonDefault}

  color: ${colors.blue};
  background: ${colors.white};

  &:hover {
    color: ${colors.white};
    border-color: ${colors.blue};
    background: ${colors.blue};
  }
`;

export const ButtonOutlineLink = styled(Link)`
  ${ButtonDefault}

  color: ${colors.blue};
  background: ${colors.white};

  &:hover {
    color: ${colors.white};
    border-color: ${colors.blue};
    background: ${colors.blue};
  }
`;

export const ButtonOutlineGruped = styled.button`
  ${ButtonDefault}

  background: ${colors.white};
  color: ${colors.darkGrey};
  border: 2px solid ${colors.grey};

  &:hover {
    color: ${colors.blue};
    border-color: ${colors.blue};
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
    border-right: none;
    border-left: none;
  }

  ${(props) =>
    props.isActive &&
    `
      border: 2px solid ${colors.blue};
      color: ${colors.blue};
      border: 2px solid ${colors.blue}!important;
  `};

  @media screen and (${breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 200px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-contetn: center;
  margin: 24px 0;
  flex-basis: 100%;

  @media screen and (${breakpoints.desktop}) {
    flex-basis: revert;
    margin: 0;
  }
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

export const Form = styled.form`
  margin: 0 auto;

  @media screen and (${breakpoints.mobileLarge}) {
    width: 400px;

    ${(props) =>
      props.fullWidth &&
      `
      max-width: 100%;
    `};
  }
`;

export const FormRow = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormTwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 64px;
  margin-bottom: 32px;

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font: bold 16px 'Montserrat', sans-serif;
  color: ${colors.blue};
  margin-bottom: 8px;

  ${(props) =>
    props.isCheckbox &&
    `
    margin-bottom: 0;
    color: ${colors.black};
    font-weight: normal;
  `};
`;

export const InputText = styled.input`
  ${InputDefault}
`;

export const SearchBar = styled.input`
  ${InputDefault}
  background: url(${SearchIcon}) no-repeat 16px;
  background-color: ${colors.white};
  padding-left: 38px;
`;

export const InputError = styled.p`
  font-size: 14px;
  color: ${colors.error};
  padding-top: 8px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 50%;
  margin-bottom: 16px;
`;

export const InputCheckbox = styled.input`
  background-color: ${colors.white};
  border: solid 2px ${colors.black};
  border-radius: 4px;

  margin-right: 8px;
  width: 24px;
  height: 24px;
  display: inline-block;
  padding: 9px;
`;

export const Select = styled.select`
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  width: 100%;
  height: 56px;
  padding: 0 10px;
  outline: none;
  font: normal 16px 'Montserrat', sans-serif;
  color: ${colors.black};

  &:focus {
    border-color: ${colors.blue};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const SelectOption = styled.option``;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  outline: none;
  font: normal 16px 'Montserrat', sans-serif;
  color: ${colors.black};
  width: 100%;
  height: 112px;

  &:focus {
    border-color: ${colors.blue};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const SuccessMessage = styled.p`
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 32px;
  border-radius: 6px;
  background: ${colors.successBackground};
  color: ${colors.success};
  ${(props) =>
    props.isError &&
    `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};
  @media screen and (${breakpoints.mobileLarge}) {
    max-width: 400px;
  }
`;

export const Card = styled.div`
  margin-bottom: 16px;
  background-color: ${colors.white};
  border-radius: 4px;
  border: solid 2px ${colors.grey};
  width: 100%;
  height: 100%;
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;
export const RecordsTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 24px;
`;

export const RecordsFilter = styled.p`
  font-weight: bold;
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const CardTitle = styled.h1`
  margin: 16px 16px 0 16px;
  font: bold 16px 'Montserrat', sans-serif;
  line-height: 1.63;
  color: ${colors.black};
`;

export const CardText = styled.p`
  margin: 4px 16px 0 16px;
  font: normal 16px 'Montserrat', sans-serif;
  line-height: 1.5;
  color: ${colors.black};
  
  &:last-child {
    margin: 4px 16px 16px 16px;
  }
`;

export const UnderlinedText = styled.p`
  ${(props) =>
    props.withMargin &&
    `
      margin: 4px 16px 16px 16px;
  `};

  font: normal 16px 'Montserrat', sans-serif;
  line-height: 1.5;
  text-decoration: underline;
  color: ${colors.black};
  &:hover {
    cursor: pointer;
  }
`;
export const InfoText = styled.p`
  text-align: center;
  padding: 20px;
  font: bold 16px 'Montserrat', sans-serif;
  color: ${colors.darkGrey};

  @media screen and (${breakpoints.tablet}) {
    padding: 32px;
    font-size: 20px;
  }
`;

export const Sidebar = styled.aside`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    width: 260px;
    display: block;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 288px;
    display: block;
  }
`;

export const ProductCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 24px;

  @media screen and (${breakpoints.desktop}) {
    width: 680px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 832px;
  }
`;

export const ProductNav = styled.nav`
  flex-basis: 100%;
`;

export const ProductNavInner = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ProductNavItem = styled.li`
  background: ${colors.white};
  text-transform: uppercase;
  color: ${colors.grey};
  font-weight: bolder;
  transition: ${transitionEase};
  cursor: pointer;
  width: -webkit-fill-available;
  text-align: center;
  border-radius: 4px 4px 0 0;
  border-bottom: 2px solid ${colors.lightGrey};

  &:hover {
    color: ${colors.blue};
  }

  @media screen and (${breakpoints.tablet}) {
    &:not(:last-child) {
      border-right: 2px solid ${colors.lightGrey};
    }

    &:hover {
      border-bottom: none;
    }
  }
`;

export const ProductNavItemLink = styled.a`
  display: block;
  padding: 1em 2em;
  color: inherit;
  text-decoration: none;
`;

export const ProductDetailsPanel = styled.div`
  background: ${colors.white};
  border-radius: 0 0 4px 4px;
  padding: 32px 68px 32px 68px;
`;

export const ProductDetailsVehicle = styled.div`
  & ul li {
    flex-basis: 50%;
  }

  @media screen and (${breakpoints.tablet}) {
    & ul li {
      flex-basis: revert;
    }
  }
`;

export const Pill = styled.div`
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${boxShadow};
  font: 600 16px 'Montserrat', sans-serif;

  & span {
    padding: 12px 18px;
  }
`;

export const PillLabel = styled.span`
  background: ${colors.blue};
  color: ${colors.white};
`;

export const PillValue = styled.span`
  background: ${colors.white};
`;

export const HorizontalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  row-gap: 24px;
`;

export const HorizontalListItem = styled.li`
  text-align: center;
`;

export const HorizontalListItemLabel = styled.div`
  font: bold 16px 'Montserrat', sans-serif;
  margin-bottom: 8px;
`;

export const HorizontalListItemValue = styled.div`
`;
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import { colors, transitionEase, breakpoints, boxShadow, strongBoxShadow } from './theme';
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

	${(props) =>
		props.isCentered &&
		`
    justify-content: center;
  `};
`;

export const Title = styled.h1`
	font: bold 28px 'Montserrat', sans-serif;
	text-align: center;
	align-self: center;

	@media screen and (${breakpoints.tablet}) {
		font-size: 36px;
	}
`;

export const SubTitle = styled.p`
	font: bold 20px 'Montserrat', sans-serif;
	text-align: center;

	@media screen and (${breakpoints.tablet}) {
		font-size: 24px;
	}

	@media screen and (${breakpoints.desktop}) {
		line-height: 56px;
	}
`;

export const Bold = styled.span`
	font-weight: 600;
`;

export const ButtonDefault = css`
	display: block;
	text-decoration: none;
	width: 100%;
	border: 2px solid ${colors.blue};
	border-radius: 4px;
	transition: ${transitionEase};
	font: bold 18px/50px 'Montserrat', sans-serif;
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

	${(props) =>
		props.isFullWidth &&
		`
    width: 100%!important;
  `};
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
	background: none;

	&:hover {
		color: ${colors.white};
		border-color: ${colors.blue};
		background: ${colors.blue};
	}
`;

export const ButtonOutlineLink = styled(Link)`
	${ButtonDefault}

	color: ${colors.blue};
	background: none;

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
	justify-content: center;
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

export const AddButtonLink = styled(Link)`
	color: ${colors.blue};

	&:hover {
		color: ${colors.darkBlue};
	}
`;

export const Form = styled.form`
	${(props) =>
		props.isCentered &&
		`
      margin: 0 auto;
  `};

	@media screen and (${breakpoints.mobileLarge}) {
		width: 400px;
		${(props) =>
			props.fullWidth &&
			`
      width: 100%;
    `};
	}
`;

export const FormRow = styled.div`
	${(props) =>
		props.isInline &&
		`
    display: flex;
    flex-wrap: wrap;
  `};

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
		props.isRadio &&
		`
    margin-bottom: 0;
    color: ${colors.black};
    font-weight: normal;
    margin-right: 24px;
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

export const SelectControl = styled.select`
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
	padding: 16px;
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

export const ProductNavInner = styled.div`
	display: flex;
	flex-direction: column;
	list-style: none;

	@media screen and (${breakpoints.tablet}) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

export const ProductNavItem = styled(NavLink)`
	padding: 1em 2em;
	text-decoration: none;
	background: ${colors.lightshadow};
	text-transform: uppercase;
	color: ${colors.grey};
	font-weight: bolder;
	transition: ${transitionEase};
	cursor: pointer;
	width: -webkit-fill-available;
	text-align: center;
	border-radius: 4px 4px 0 0;
	border-bottom: 2px solid ${colors.lightGrey};

	&.active,
	&:hover {
		color: ${colors.white};
		background: ${colors.blue};
	}

	@media screen and (${breakpoints.tablet}) {
		&:not(:last-child) {
			border-right: 2px solid ${colors.lightGrey};
		}
	}
`;

export const ProductDetailsPanel = styled.div`
	background: ${colors.white};
	border-radius: 0 0 4px 4px;
	padding: 42px 68px 42px 68px;
`;

export const Pill = styled.div`
	display: flex;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: ${strongBoxShadow};
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
	list-style: none;
	row-gap: 24px;
	column-gap: 24px;

	${(props) =>
		props.isStreched &&
		`
      justify-content: space-between;
  `};
`;

export const HorizontalListItem = styled.li`
	text-align: center;
`;

export const HorizontalListItemLabel = styled.div`
	font: bold 16px 'Montserrat', sans-serif;
	margin-bottom: 8px;
`;

export const HorizontalListItemValue = styled.div``;

export const ProductDetailsRow = styled.div`
	&:not(:last-child) {
		margin-bottom: 72px;
	}

	@media screen and (${breakpoints.tablet}) {
		&:not(:last-child) {
			margin-bottom: 24px;
		}
	}
`;

export const ProductDetailsItemLabel = styled.div`
	font: bold 18px 'Montserrat', sans-serif;
	margin-bottom: 12px;
`;

export const ProductDetailsItemValue = styled.div`
	line-height: 1.5;
	text-align: justify;
`;

export const Inline = styled.div`
	display: inline-block;

	&:not(:last-child) {
		margin-bottom: 72px;
		margin-right: 100px;
	}

	@media screen and (${breakpoints.tablet}) {
		&:not(:last-child) {
			margin-bottom: 0;
		}
	}
`;

export const Block = styled.div`
	display: block;
`;

export const Thumbnails = styled.div`
	display: flex;
	column-gap: 24px;
	row-gap: 24px;
	margin-top: 24px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 16px;

	@media screen and (${breakpoints.tablet}) {
		flex-direction: row;
		justify-content: space-between;
		column-gap: 24px;
	}

  ${(props) =>
		props.hasPadding &&
		`
      padding-bottom: 24px;
  `};
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
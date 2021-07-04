import styled from 'styled-components';
import { Button } from '../../lib/style/generalStyles';

import { colors, transitionEase, breakpoints } from '../../lib/style/theme';

export const ProductCardWrapper = styled.div`
	width: 100%;
	border: ${colors.grey} 2px solid;
	border-radius: 4px;
	overflow: hidden;
	background: ${colors.white};
	transition: ${transitionEase};

	margin-bottom: 24px;

	&:hover,
	&:focus {
		border: ${colors.blue} 2px solid;
	}
`;

export const Header = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 24px;
	border-bottom: ${colors.grey} 1px solid;

	@media screen and (${breakpoints.tablet}) {
		padding: 24px;
	}
`;

export const Title = styled.h2`
	color: ${colors.blue};
	font: bold 18px 'Montserrat', sans-serif;

	@media screen and (${breakpoints.tablet}) {
		font-size: 24px;
	}
`;

export const Price = styled.span`
	color: ${colors.black};
	font: bold 18px 'Montserrat', sans-serif;
	${(props) => props.isHeaderPrice && 'display: none;'};
	${(props) => props.isHeaderPrice === false && 'flex-basis: 100%; margin-top: 10px;'};

	@media screen and (${breakpoints.desktop}) {
		margin-left: auto;
		${(props) => props.isHeaderPrice && 'display: block;'};
		${(props) => props.isHeaderPrice === false && 'display: none;'};
	}
`;

export const ExpandButton = styled.button`
	display: flex;
	flex-direction: ${(props) => (props.isExpanded ? 'column' : 'column-reverse')};
	border: none;
	background: none;
	color: ${colors.blue};
	margin-left: auto;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: none;
	}

	& > svg {
		margin: -5px 0;
	}

	@media screen and (${breakpoints.desktop}) {
		display: none;
	}
`;

export const Body = styled.div`
	padding: 16px;

	@media screen and (${breakpoints.tablet}) {
		padding: 24px;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	margin-bottom: 24px;

	@media screen and (${breakpoints.tablet}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const Actions = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 16px;
	margin-top: 32px;
`;

export const Expert = styled.p`
	font: 16px 'Montserrat', sans-serif;
`;

export const Keywords = styled.div`
	display: flex;
`;

export const Keyword = styled.span`
	color: ${colors.white};
	background: ${colors.grey};
	border-radius: 20px;
	padding: 8px 16px;
	margin-right: 16px;

	&:last-child {
		margin-right: 0;
	}
`;

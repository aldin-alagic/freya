import styled from 'styled-components';
import { colors, boxShadow, strongBoxShadow, transitionEase } from '../../lib/style/theme';

export const ProductCreateSolutionWrapper = styled.div``;

export const Inner = styled.div``;

export const IssueTypeOptions = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 24px;
	row-gap: 24px;
`;

export const IssueTypeOptionsItem = styled.div`
	border-radius: 16px;
	overflow: hidden;
	box-shadow: ${strongBoxShadow};
	font: 600 16px 'Montserrat', sans-serif;
	padding: 16px;

	&:hover {
		cursor: pointer;
		border-color: ${colors.blue};
		background: ${colors.blue};
		color: ${colors.white};
	}

	&:focus {
		outline: none;
		border-color: ${colors.blue};
		background: ${colors.blue};
		color: ${colors.white};
	}
`;

export const List = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 16px;
  margin-bottom: 24px;
`;

export const ListItem = styled.div`
	background: ${colors.white};
	box-shadow: ${strongBoxShadow};
  display: inline-block;
  border-radius: 4px;
`;

export const ListItemValue = styled.span`
	font-size: 75%;
	font-weight: 700;
	text-align: center;
	white-space: nowrap;
	vertical-align: top;
	padding: 0rem 1.5rem;
	line-height: 2;
`;

export const ListItemValueButton = styled.button`
  display:inline-flex;
  justify-content: center;
  align-items: center;
  font: 600 16px 'Montserrat', sans-serif;
	border: 0;
	padding: 4px;
  color: ${colors.error};

	&:focus {
		outline: 0;
	}

	&:hover {
		background-color: colors;
	}
`;

export const ProductCreateSolutionItem = styled.div`
  display: inline-block;
  width: 50%;
`;

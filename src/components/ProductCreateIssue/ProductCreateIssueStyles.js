import styled from 'styled-components';
import { colors, boxShadow, strongBoxShadow, transitionEase } from '../../lib/style/theme';

export const ProductCreateIssueWrapper = styled.div``;

export const Inner = styled.div`

`;

export const IssueTypeOptions = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 16px;
	row-gap: 16px;
	margin-top: 16px;
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

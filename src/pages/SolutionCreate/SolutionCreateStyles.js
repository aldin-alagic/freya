import styled from 'styled-components';
import { colors, boxShadow, transitionEase } from '../../lib/style/theme';

export const SolutionCreateWrapper = styled.div``;

export const Inner = styled.div`
	background: ${colors.white};
	border-radius: 4px;
	overflow: hidden;
	transition: ${transitionEase};
	box-shadow: ${boxShadow};
	margin-top: 40px;
	margin-bottom: 40px;
	padding: 32px;
`;
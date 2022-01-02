import styled from 'styled-components';
import { transitionCubic, boxShadow, boxShadowHover, colors } from '../../lib/style/theme';

export const IconCardWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 6px;
	box-shadow: ${boxShadow};
	transition: ${transitionCubic};
	background: ${colors.white};
	padding: 16px;
	column-gap: 24px;

	&:hover {
		box-shadow: ${boxShadowHover};
	}
`;

export const Icon = styled.div`
	color: ${colors.blue};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled.h3`
	font-size: 18px;
	margin-bottom: 8px;
`;

export const Description = styled.p`
	font-size: 16px;
	line-height: 1.5;
`;

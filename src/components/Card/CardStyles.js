import styled from 'styled-components';
import { transitionCubic, boxShadow, boxShadowHover, colors } from '../../lib/style/theme';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	border-radius: 6px;
	box-shadow: ${boxShadow};
	transition: ${transitionCubic};
	background: ${colors.white};

	&:hover {
		box-shadow: ${boxShadowHover};
	}
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
`;

export const Figure = styled.figure`
	height: 350px;
	width: 100%;
	border-radius: 6px;
	overflow: hidden;
	padding: 20px;
	margin-bottom: auto;
`;

export const Content = styled.div``;

export const Title = styled.h3`
	font-size: 18px;
	margin-bottom: 10px;
`;

export const Description = styled.p`
	font-size: 16px;
	margin-bottom: 20px;
	line-height: 1.5;
`;

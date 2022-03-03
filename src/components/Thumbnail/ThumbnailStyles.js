import styled from 'styled-components';
import { colors } from '../../lib/style/theme';

export const ThumbnailWrapper = styled.div``;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

export const Image = styled.img`
	height: 150px;
	width: 120px;
	object-fit: cover;
	border-radius: 4px;
	border-color: ${colors.blue};
`;

export const ImageName = styled.p`
    text-align: center;
`;

export const Placeholder = styled.div`
	color: ${colors.grey};
	& svg {
		width: 115px;;
		height: 150px;
	}
`;



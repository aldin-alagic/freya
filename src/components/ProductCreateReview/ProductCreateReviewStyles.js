import styled from 'styled-components';
import { colors, strongBoxShadow } from '../../lib/style/theme';

export const ProductCreateReviewWrapper = styled.div``;

export const Inner = styled.div``;

export const ProductCreateReviewRow = styled.div`
	margin-bottom: 24px;
`;

export const ProductCreateReviewLabel = styled.h3`
	font: bold 18px 'Montserrat', sans-serif;
	color: ${colors.blue};
	margin-bottom: 8px;
`;

export const ProductCreateReviewValue = styled.p`

`;

export const ProductCreateReviewItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 16px;
	row-gap: 16px;
	margin-top: 16px;
`;

export const ProductCreateReviewItem = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${strongBoxShadow};
  font: 600 16px 'Montserrat', sans-serif;
  padding: 16px;
`;
import React from 'react';
import { ProductCardItemWrapper, Title, Content } from './ProductCardItemStyles';

const ProductCardItem = ({ title, children, isExpanded, nowrap }) => {
	return (
		<ProductCardItemWrapper isExpanded={isExpanded} nowrap={nowrap}>
			<Title>{title}</Title>
			<Content>{children}</Content>
		</ProductCardItemWrapper>
	);
};

export default ProductCardItem;

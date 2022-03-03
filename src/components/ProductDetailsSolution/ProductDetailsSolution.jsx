import React from 'react';

import { ProductDetailsSolutionWrapper } from './ProductDetailsSolutionStyles';
import { ProductDetailsRow, ProductDetailsItemLabel, ProductDetailsItemValue, HorizontalList, Pill, PillValue } from '../../lib/style/generalStyles';

const ProductDetailsSolution = ({ description, tools, parts }) => {
	return (
		<ProductDetailsSolutionWrapper>
			<ProductDetailsRow>
				<ProductDetailsItemLabel>Description</ProductDetailsItemLabel>
				<ProductDetailsItemValue>{description}</ProductDetailsItemValue>
			</ProductDetailsRow>
			<ProductDetailsRow>
				<ProductDetailsItemLabel>Required Tools</ProductDetailsItemLabel>
				<ProductDetailsItemValue>
					<HorizontalList>
						{tools &&
							tools.map((tool, index) => (
								<Pill key={index}>
									<PillValue>{tool}</PillValue>
								</Pill>
							))}
					</HorizontalList>
				</ProductDetailsItemValue>
			</ProductDetailsRow>
			<ProductDetailsRow>
				<ProductDetailsItemLabel>Required Parts</ProductDetailsItemLabel>
				<ProductDetailsItemValue>
					<HorizontalList>
						{parts &&
							parts.map((part, index) => (
								<Pill key={index}>
									<PillValue>{part}</PillValue>
								</Pill>
							))}
					</HorizontalList>
				</ProductDetailsItemValue>
			</ProductDetailsRow>
		</ProductDetailsSolutionWrapper>
	);
};
export default ProductDetailsSolution;

import React from 'react';

import { ProductDetailsIssueWrapper } from './ProductDetailsIssueStyles';
import { Keywords } from '../ProductCard/ProductCardStyles';
import { ProductDetailsRow, ProductDetailsItemLabel, ProductDetailsItemValue, Pill, PillValue, HorizontalList } from '../../lib/style/generalStyles';

const ProductDetailsIssue = ({ description, keywords }) => {
	return (
		<ProductDetailsIssueWrapper>
			<ProductDetailsRow>
				<ProductDetailsItemLabel>Description</ProductDetailsItemLabel>
				<ProductDetailsItemValue>{description}</ProductDetailsItemValue>
			</ProductDetailsRow>
			<ProductDetailsRow>
				<ProductDetailsItemLabel>Keywords</ProductDetailsItemLabel>
				<ProductDetailsItemValue>
					<HorizontalList>
						{keywords &&
							keywords.map((keyword) => (
								<Pill key={keyword}>
									<PillValue>{keyword}</PillValue>
								</Pill>
							))
						}
					</HorizontalList>
				</ProductDetailsItemValue>
			</ProductDetailsRow>
		</ProductDetailsIssueWrapper>
	);
};
export default ProductDetailsIssue;

import React from 'react';

import { ProductDetailsVehicleWrapper, Row } from './ProductDetailsVehicleStyles';
import {
	HorizontalList,
	HorizontalListItem,
	HorizontalListItemLabel,
	HorizontalListItemValue,
	ProductDetailsRow,
} from '../../lib/style/generalStyles';

const ProductDetailsVehicle = ({ vehicles, fuelType, transmission }) => {
	return (
		<ProductDetailsVehicleWrapper>
			{vehicles.map(({ brand, model, years, variant }, index) => (
				<ProductDetailsRow key={index}>
					<HorizontalList isStreched>
						<HorizontalListItem>
							<HorizontalListItemLabel>Brand</HorizontalListItemLabel>
							<HorizontalListItemValue>{brand}</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Model</HorizontalListItemLabel>
							<HorizontalListItemValue>{model}</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Year</HorizontalListItemLabel>
							<HorizontalListItemValue>{years.join(', ')}</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Variant</HorizontalListItemLabel>
							<HorizontalListItemValue>{variant ? variant : "-"}</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Fuel Type</HorizontalListItemLabel>
							<HorizontalListItemValue>{fuelType}</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Transmission</HorizontalListItemLabel>
							<HorizontalListItemValue>{transmission}</HorizontalListItemValue>
						</HorizontalListItem>
					</HorizontalList>
				</ProductDetailsRow>
			))}
		</ProductDetailsVehicleWrapper>
	);
};

export default ProductDetailsVehicle;

import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import ProductCardItem from './components/ProductCardItem/ProductCardItem';

import { ProductCardWrapper, Header, Title, Price, ExpandButton, Body, Row, Expert, Keywords, Keyword, Actions } from './ProductCardStyles';
import { Button, Pill, PillValue } from '../../lib/style/generalStyles';

const ProductCard = ({ title, price, description, prices, views, solutionId, limited, expert, keywords, onEventClick }) => {
	const [isExpanded, setIsExpanded] = useState(true);
	console.log(isExpanded);
	const getButtonText = () => {
		return 'Details';
	};

	return (
		<ProductCardWrapper>
			<Header>
				<Title>{title}</Title>
				<Price isHeaderPrice={true}>{price}</Price>
				<ExpandButton
					isExpanded={isExpanded}
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
				>
					<MdExpandLess size={20} />
					<MdExpandMore size={20} />
				</ExpandButton>
				<Price isHeaderPrice={false}>{price}</Price>
			</Header>
			<Body>
				<Row>
					<ProductCardItem isExpanded={isExpanded} title="Description">
						{description}
					</ProductCardItem>
				</Row>
				<Row>
					<ProductCardItem isExpanded={isExpanded} title="Expert">
						<Expert>{expert}</Expert>
					</ProductCardItem>
					<ProductCardItem isExpanded={isExpanded} title="Keywords">
						<Keywords>
							{keywords &&
								keywords.map((keyword) => (
									<Pill key={keyword}>
										<PillValue>{keyword}</PillValue>
									</Pill>
								))}
						</Keywords>
					</ProductCardItem>
				</Row>
				<Actions>
					<Button onClick={onEventClick}>Details</Button>
					<Button onClick={onEventClick}>Add to cart</Button>
				</Actions>
			</Body>
		</ProductCardWrapper>
	);
};

export default ProductCard;

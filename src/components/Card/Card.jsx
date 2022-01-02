import React from 'react';

import { Inner, CardWrapper, Figure, Title, Description, Content } from './CardStyles';
import { Button, Image } from '../../lib/style/generalStyles';

const Card = ({ image, imageAlt, title, description, route }) => {
	return (
		<CardWrapper>
			{image && (
				<Figure>
					<Image src={image} alt={imageAlt} />
				</Figure>
			)}
			<Inner>
				<Content>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</Content>
				<Button to={route} isFullWidth>
					Find out more
				</Button>
			</Inner>
		</CardWrapper>
	);
};

export default Card;

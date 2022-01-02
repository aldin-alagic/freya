import React from 'react';

import { IconCardWrapper, Icon, Title, Description, Content } from './IconCardStyles';

const IconCard = ({ icon, title, description }) => {
	return (
		<IconCardWrapper>
			<Icon>{icon}</Icon>
			<Content>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Content>
		</IconCardWrapper>
	);
};

export default IconCard;

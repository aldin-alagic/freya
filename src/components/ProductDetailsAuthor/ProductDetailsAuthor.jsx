import React from 'react';

import { ProductDetailsAuthorWrapper, Author, AuthorMainInfo, AuthorName, AuthorType, AuthorStatus, AuthorImage } from './ProductDetailsAuthorStyles';
import { MdAccountBox } from 'react-icons/md';
import {
	HorizontalList,
	HorizontalListItem,
	HorizontalListItemLabel,
	HorizontalListItemValue,
	ProductDetailsRow,
	Pill,
	PillValue,
	ProductDetailsItemLabel,
	ProductDetailsItemValue,
	Inline, 
} from '../../lib/style/generalStyles';

const ProductDetailsAuthor = ({}) => {
	return (
		<ProductDetailsAuthorWrapper>
			<ProductDetailsRow>
				<Author>
					<AuthorImage>
						<MdAccountBox size={120} />
					</AuthorImage>
					<AuthorMainInfo>
						<AuthorName>Jon Doe</AuthorName>
						<AuthorType>Expert</AuthorType>
						<AuthorStatus>Online</AuthorStatus>
					</AuthorMainInfo>
				</Author>
			</ProductDetailsRow>
			<ProductDetailsRow>
				<HorizontalList>
						<HorizontalListItem>
							<HorizontalListItemLabel>Joined</HorizontalListItemLabel>
							<HorizontalListItemValue>22.10.2020.</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Country</HorizontalListItemLabel>
							<HorizontalListItemValue>Croatia</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Languages</HorizontalListItemLabel>
							<HorizontalListItemValue>CRO, ENG, DE</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Solutions</HorizontalListItemLabel>
							<HorizontalListItemValue>100</HorizontalListItemValue>
						</HorizontalListItem>
						<HorizontalListItem>
							<HorizontalListItemLabel>Rating</HorizontalListItemLabel>
							<HorizontalListItemValue>4.8</HorizontalListItemValue>
						</HorizontalListItem>
				</HorizontalList>
			</ProductDetailsRow>
			<ProductDetailsRow>
				<Inline>
					<ProductDetailsItemLabel>Profession</ProductDetailsItemLabel>
					<ProductDetailsItemValue>
						<HorizontalList>
							<Pill>
								<PillValue>Engines</PillValue>
							</Pill>
							<Pill>
								<PillValue>Brakes</PillValue>
							</Pill>
						</HorizontalList>
					</ProductDetailsItemValue>
				</Inline>
				<Inline>
					<ProductDetailsItemLabel>Brands</ProductDetailsItemLabel>
					<ProductDetailsItemValue>
						<HorizontalList>
							<Pill>
								<PillValue>Volkswagen</PillValue>
							</Pill>
							<Pill>
								<PillValue>BMW</PillValue>
							</Pill>
							<Pill>
								<PillValue>Audi</PillValue>
							</Pill>
						</HorizontalList>
					</ProductDetailsItemValue>
				</Inline>
			</ProductDetailsRow>
			<ProductDetailsRow>
				
			</ProductDetailsRow>
			<ProductDetailsRow>
				<ProductDetailsItemLabel>About</ProductDetailsItemLabel>
				<ProductDetailsItemValue>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, 
					ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?
				</ProductDetailsItemValue>
			</ProductDetailsRow>
		</ProductDetailsAuthorWrapper>
	);
};

export default ProductDetailsAuthor;

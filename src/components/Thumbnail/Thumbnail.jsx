import React from 'react';
import { FaFile } from 'react-icons/fa';
import { ThumbnailWrapper, Item, Image, Placeholder, ImageName } from './ThumbnailStyles';

const Thumbnail = ({ attachment }) => {
	const renderImage = () => {
		if (attachment && attachment.data) {
			return (
				<Item>
					<Image src={attachment.data} alt={`Attachment ${attachment.name}`} />
					<ImageName>{attachment.name}</ImageName>
				</Item>
			);
		} else {
			return (
				<Placeholder>
					<FaFile />
				</Placeholder>
			);
		}
	};

	return <ThumbnailWrapper> {renderImage()} </ThumbnailWrapper>;
};

export default Thumbnail;

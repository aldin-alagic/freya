import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

import { NotificationWrapper, NotificationIcon,  NotificationMessage} from './NotificationStyles';

const Notification = ({ children, isWarning }) => {
	return (
		<NotificationWrapper isWarning={isWarning}>
			{isWarning && (
				<NotificationIcon>
					<FaExclamationTriangle />{' '}
				</NotificationIcon>
			)}
			<NotificationMessage>{children}</NotificationMessage>
		</NotificationWrapper>
	);
};

export default Notification;

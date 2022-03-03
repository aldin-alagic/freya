import styled from 'styled-components';

import { colors, breakpoints, strongBoxShadow } from '../../lib/style/theme';

export const NotificationWrapper = styled.div`
	display: flex;
	font-size: 14px;
	padding: 16px;
	border-radius: 4px;

	${(props) =>
		props.isWarning &&
		`
      color: ${colors.warning};
      background: ${colors.warningBackground};
      border: ${colors.warningBorder};
    `};
`;

export const NotificationIcon = styled.div`
	margin-right: 16px;
`;

export const NotificationMessage = styled.p``;

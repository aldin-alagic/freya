import styled from 'styled-components';
import { colors } from '../../lib/style/theme';

export const HomeWrapper = styled.div``;

export const Inner = styled.div`
	width: 100%;
`;

export const SectionTitle = styled.h2`
	width: 100%;
  text-align: center;
  color: ${colors.white};
  font-size: 22px;
  margin-bottom: 16px;

  &:first-child{
    padding-top: 64px;
  }
`;

export const Benefits = styled.div`
  background: ${colors.blue};

  &:before {
    content: '';
    border-bottom-left-radius: 5% 100%;
    border-bottom-right-radius: 5% 100%;
    position: absolute;
    width: 100%;
    background: #f5f5f5;
    height: 4%;
    box-shadow: 0px 10px 5px 0px rgb(0 0 0 / 10%);
  }
`;

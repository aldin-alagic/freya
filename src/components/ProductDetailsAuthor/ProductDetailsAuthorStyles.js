import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/style/theme';

export const ProductDetailsAuthorWrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
   
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 24px;
`;

export const AuthorImage = styled.div`
  background: ${colors.grey};
`;

export const AuthorMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const AuthorName = styled.p`
  font: bold 28px 'Montserrat', sans-serif;
`;

export const AuthorType = styled.p`
  font-weight: bold;
`;

export const AuthorStatus = styled.div`
  font-weight: bold;
  color: ${colors.green};
`;
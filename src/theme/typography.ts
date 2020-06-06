import styled, { css } from 'styled-components';

const resetStyles = css`
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 40px;
  ${resetStyles}
`;

const SubTitle = styled.h2`
  ${resetStyles}
`;

const P = styled.p`
  font-size: 16px;
  ${resetStyles}
`;

export { Title, SubTitle, P };

import styled from 'styled-components';

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cyanMd};
`;

export const App = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.black};
`;

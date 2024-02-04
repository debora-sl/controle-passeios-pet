import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.gray300};

  display: flex;
  align-items: center;
  justify-content: start;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 2rem;
  }

`

export const Logo = styled.img`
  width: 1.50rem;
  height: 1.50rem;
  margin: 0.60rem;
`

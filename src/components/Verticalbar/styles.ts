import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2rem;

  nav {
    ul {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-right: 1rem;
    }

    li{
      margin-top: 0.5rem;

      a {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`

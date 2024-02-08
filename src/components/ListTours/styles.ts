import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  border: thin solid yellow;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    color: ${({ theme }) => theme.colors.midnightBlue};
  }
`

export const Table = styled.table`

  border-radius: 5px;
  width: 38rem;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

`

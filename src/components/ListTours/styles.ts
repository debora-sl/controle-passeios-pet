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

  border: 1px solid black;
  width: 10rem;
  height: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;


  thead > tr {
    background-color: ${({ theme }) => theme.colors.gray500};
  }

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    border-spacing: 0;
  }
`

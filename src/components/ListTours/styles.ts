import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    color: ${({ theme }) => theme.colors.midnightBlue};
  }

  a {
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`

export const Table = styled.table`

  border-radius: 5px;
  width: 35rem;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  thead > tr {
    background-color: ${({ theme }) => theme.colors.gray500};
    display: flex;
  }

  tr > th{
    width: 17.5rem;
    height: 2rem;
    margin-top: 0.75rem;

    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  tbody > tr {
    background-color: ${({ theme }) => theme.colors.indigo};

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35rem;

    border-collapse: collapse;
    border-spacing: 0;

    td {
      margin-right: 8rem;
    }
  }

`

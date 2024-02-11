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

  tbody > tr, td {
    border: thin solid yellow;
    background-color: ${({ theme }) => theme.colors.indigo};

    display: flex;
    justify-content: center;
    align-items: center;
    width: 35rem;

    border-collapse: collapse;
    border-spacing: 0;


  }

`

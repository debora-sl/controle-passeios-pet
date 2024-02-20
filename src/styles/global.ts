import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray600};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.black};
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    color: ${({ theme }) => theme.colors.midnightBlue};
    text-align: center;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    color: ${({ theme }) => theme.colors.midnightBlue};
    text-align: center;
    margin-top: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    label {
      margin-right: 1rem;
      font-size: ${({ theme }) => theme.fontSize.lg};;

      input {
        border: none;
        border-radius: 3px;
        margin-right: 0.4rem;
        margin-left: 0.4rem;
        text-align: center;

      }
    }

    button{
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.gray100};
      width: 10rem;
      height: 2rem;
      border: none;
      border-radius: 3px;
    }
  }
`

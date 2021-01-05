import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    /* cursor: none; */
  }

  html {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text}
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;

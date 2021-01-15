import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-size: 1.6rem;
    /* cursor: none; */
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    font-size: 62.5%;
  }

  body {
    font-family: ${(props) =>
      props.theme.font.family
        .primary}, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    overflow-y: auto;
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text.main}
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;

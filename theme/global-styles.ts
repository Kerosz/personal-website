import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    list-style: none;
    outline: none;
    font-size: 1.6rem;
    /* cursor: none; */
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    font-size: 62.5%;
    overflow-x: hidden;

    ${(props) => props.theme.breakpoints.sm} {
      overflow-x: auto;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: ${(props) =>
      props.theme.font.family
        .primary}, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text.main};
    overflow-x: hidden;
    overflow-y: auto;
    -moz-transition: all 350ms ease-in-out;
    -o-transition: all 350ms ease-in-out;
    -webkit-transition: all 350ms ease-in-out;
    transition: all 350ms ease-in-out;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    scroll-snap-type: y mandatory;
  }
`;

export default GlobalStyles;

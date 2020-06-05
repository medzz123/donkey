import { createGlobalStyle } from "styled-components";

import theme from ".";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  };

  body {
    margin: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
  }

  p, span, h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.eireBlack};
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
`;

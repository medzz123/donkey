import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  };
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
`;

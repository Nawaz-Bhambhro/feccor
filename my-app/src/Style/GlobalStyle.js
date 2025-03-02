import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: 'Roboto', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
  }
`;

export const lightTheme = {
  body: "#ffffff",
  text: "#000000",
  primary: "#007bff",
  secondary: "#6c757d",
};

export const darkTheme = {
  body: "#121212",
  text: "#ffffff",
  primary: "#1e90ff",
  secondary: "#aaaaaa",
};

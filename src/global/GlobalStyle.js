import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  :root{
      --PrimaryCor: #049DD9;
      --SecondaryCor: #0788D9;
      --TertiaryCor: #048ABF;
      --AssistantsOne: #04B2D9;
      --AssistantsaTwo: #05DBF2;
  }
`;

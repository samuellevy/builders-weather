import { createGlobalStyle } from "styled-components";
// import { colors } from "./styles";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,800,900&display=swap');
*{margin: 0; padding: 0; outline: none; box-sizing: border-box; list-style: none; font-family: Lato; -webkit-font-smoothing: antialiased}

html, body, #root {
  height: 100%;
}

*:focus{
  outline: 0;
}

a {
  text-decoration: none;
}

input, button{
  font: 14px 'Lato', sans-serif;
}

button{
  cursor: pointer;
}
`;

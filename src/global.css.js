import { createGlobalStyle } from "styled-components";
import stars from "./assets/background-stars.svg";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap');
* {
  box-sizing: border-box;
  transition: all 0.25s ease-out;
  margin: 0 auto;
}
body {
    width: 100%;
    height: 100%;
    font-family: 'Antonio', sans-serif;
    font-weight: 400;
    font-style:normal;
    background-color: #070724;
    background-image:url(${stars})
  }
`;

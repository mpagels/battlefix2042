import { createGlobalStyle } from "styled-components";
import img from "./assets/bg.jpg";
import font1 from "./assets/fonts/BF_Modernista-Bold.woff2";
import font2 from "./assets/fonts/Purista-Bold.woff2";
export default createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: MyFont2;
  background-color: black;;
  background-size: cover;
}
@font-face {
  font-family: "MyFont";
  src: local("MyFont"),
    url(${font1}) format("woff2");
}
@font-face {
  font-family: "MyFont2";
  src: local("MyFont2"), url(${font2}) format("woff2");
}
`;

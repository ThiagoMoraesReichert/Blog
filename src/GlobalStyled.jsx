import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Blinker";
  }

  body {
    background-color: #0e1217;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
    opacity: 0.7;
    transition: 0.3s;
  }

  a:hover {
    opacity: 1;
    text-shadow: 0 0 10px #fff;
  }

  button:hover {
    opacity: 1;
    text-shadow: 0 0 10px #fff;
  }

  p {
    color: #a9abb3;
  }

  ul {
    list-style: none;
  }

`

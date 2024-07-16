import styled, { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, #root, body {
    height: 100%;
    font-size: 15px;

    @media (max-width: 800px) { // Mobile
      font-size: 13px;
    }
  }
  `;
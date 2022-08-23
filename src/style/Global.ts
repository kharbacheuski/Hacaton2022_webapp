import { createGlobalStyle } from "styled-components"
import { darkColor, whiteColor, pFontSize, pLineHeight, backgroundPink, backgroundBlack } from "./Constants"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @font-face {
      font-family: BreeSerif;
      src: url('./BreeSerif-Regular.ttf'), url('./Helvetica-Regular.otf') format("truetype");
      font-style: normal;
    }
  }
  html, body {
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${whiteColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: #b14545;  
    }
  
    &[theme="moon"] {
      &::-webkit-scrollbar-track {
        background-color: ${darkColor};
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${whiteColor};    
      }
    }
  }
  #page {
    font-family: consolas;
    font-size: ${pFontSize};
    line-height: ${pLineHeight};
    font-weight: 600;
    background-color: ${backgroundPink};
    width: 100%;
    transition: background-color 0.5s ease;
    color: ${({theme}) => theme === "sun"?darkColor:whiteColor};
  }
  #page[theme="moon"] {
    background-color: ${backgroundBlack};
  }
`
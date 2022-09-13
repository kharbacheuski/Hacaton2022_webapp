import styled from "styled-components";
import { 
  darkColor, 
  whiteColor, 
  breakpointXL, 
  breakpointLG, 
  breakpointMD, 
  breakpointSM,
  titleFontSize,
  titleLineHeight,
  pFontSize,
  pLineHeight
} from "./Constants"

export const Paragraph = styled.p`
  margin: .5rem 0;
  color: ${({theme}) => theme === "moon"?whiteColor:darkColor};
`

export const Title = styled.h1`
  font-size: ${titleFontSize};
  line-height: ${titleLineHeight};
  margin: 1rem 0;
  text-align: center;
  color: ${({theme}) => theme === "moon"?whiteColor:darkColor}
`
export const Container = styled.div`
  margin: 50px auto 80px;
  max-width: 1100px;

  @media screen and (max-width: ${breakpointXL}) {
    max-width: 900px;
  }
  @media screen and (max-width: ${breakpointLG}) {
    max-width: 700px;
    margin: 30px auto 60px;
  }
  @media screen and (max-width: ${breakpointMD}) {
    max-width: 550px;
  }
  @media screen and (max-width: ${breakpointSM}) {
    max-width: 100%;
    padding: 0 15px;
  }
`

export const Select = styled.select`
  padding: 5px 15px;
  color: ${({theme}) => theme === "moon"?whiteColor:darkColor};
  font-size: ${pFontSize};
  line-height: ${pLineHeight};
  border: 2px solid ${({theme}) => theme === "moon"?whiteColor:darkColor};
  background-color: ${({theme}) => theme === "moon"?darkColor:whiteColor};
  transition: all .1s;
`

export const Input = styled.input`
  padding: 5px 15px;
  color: ${({theme}) => theme === "moon"?whiteColor:darkColor};
  font-size: ${pFontSize};
  line-height: ${pLineHeight};
  border: 2px solid ${({theme}) => theme === "moon"?whiteColor:darkColor};
  background-color: ${({theme}) => theme === "moon"?darkColor:whiteColor};
  transition: all .1s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Button = styled.div`
  border: none;
  width: 15rem;
  padding: 1rem 0;
  background-color: ${(props) => props.theme === 'sun'?darkColor:whiteColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme === 'sun'?whiteColor:darkColor};
  font-size: ${pFontSize};
  line-height: ${pLineHeight};
  cursor: pointer;
  transition: all 0.3s;
  margin: 2rem 0 1rem; 
  border-radius: ${({theme}) => theme === "moon"?"50px":"none"};

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: ${breakpointSM}) {
    width: 100%;
  }
`

export const Loader = styled.div`
  z-index: 5;
  position: absolute;
  width: 100%;
  height: 100vh;
  color: black;
  font-size: ${titleFontSize};
  opacity: 0.6;
  background-color: ${(props) => props.theme === 'sun'?"#000":"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    p {
      transition: all 7s;
      transform: rotate(1turn);
    }
  }
`
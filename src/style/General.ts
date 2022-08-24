import styled from "styled-components";
import { 
  darkColor, 
  whiteColor, 
  breakpointXL, 
  breakpointLG, 
  breakpointMD, 
  breakpointSM,
  titleFontSize,
  titleLineHeight
} from "./Constants"

export const Paragraph = styled.p`
  margin: .5rem 0;
  color: ${({theme}) => theme === "moon"?whiteColor:darkColor};
`
export const Title = styled.h1`
  font-size: ${titleFontSize};
  line-height: ${titleLineHeight};
  margin: 1rem 0;
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
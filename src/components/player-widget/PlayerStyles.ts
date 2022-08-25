import styled from "styled-components"
import { 
    breakpointSM, 
    darkColor, 
    whiteColor, 
    titleFontSize, 
    titleLineHeight, 
    pFontSize, 
    pLineHeight, 
    breakpointXXL,
} from "../../style/Constants"

export const PlayerButton = styled.div`
    border: none;
    width: 24rem;
    height: 6rem;
    background-color: ${(props) => props.theme === 'sun'?darkColor:whiteColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme === 'sun'?whiteColor:darkColor};
    font-size: ${titleFontSize};
    line-height: ${titleLineHeight};
    cursor: pointer;
    transition: all 0.3s;

    &:active {
        transform: scale(1.05);
    }

    @media screen and (max-width: ${breakpointSM}) {
        width: 100%;
    }
`
export const WidgetPlayer = styled(PlayerButton)`
    position: fixed;
    border: 2px solid ${(props) => props.theme === 'sun'?darkColor:"none"};
    width: 3.5rem;
    height: 3.5rem;
    bottom: 2rem;
    left: 2rem;
    background-color: ${whiteColor};
    border-radius: 50%;
    font-size: ${pFontSize};
    line-height: ${pLineHeight};
    z-index: 3;
    transition: transform .5s;

    &:hover {
        transform: scale(1.05);
    }
    p {
        position: absolute;
        left: 4rem;
        color: ${(props) => props.theme === 'sun'?darkColor:whiteColor};

        @media screen and (max-width: ${breakpointXXL}) {
            display: none;
        }
    }

    @media screen and (max-width: ${breakpointSM}) {
        bottom: 1rem;
        right: 2rem;
        left: initial;
    }

`
export const Stop = styled.div`
    position: relative;
    left: 5px;
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 24px solid ${darkColor};
    transform: rotate(90deg);
    z-index: 4;
`
export const Play = styled.div`
    width: 5px;
    height: 25px;
    background-color: ${darkColor};
    position: relative;
    left: -5px;
    z-index: 4;
    &:after {
        content: "";
        position absolute;
        width: 5px;
        height: 25px;
        background-color: ${darkColor};
        left: 9px;
    }
`
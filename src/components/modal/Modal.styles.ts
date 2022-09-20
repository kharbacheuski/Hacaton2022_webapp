import styled from "styled-components"
import { bloodColor, darkColor, whiteColor, backgroundPink, breakpointSM } from "../../style/Constants"

export const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${darkColor};
    opacity: 0.95;
`
export const ModalContentWrapper = styled.div`
    position: absolute;
    top: calc(50% - 18rem);
    left: calc(50% - 23rem);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 46rem;
    height: 30rem;
    background-color: ${whiteColor};
    border: 3px solid ${darkColor};
    border-radius: 2rem;
    transition: all 0.3s;
    overflow: auto;
    padding: 2rem;

    @media screen and (max-width: ${breakpointSM}) {
        width: calc(100% - 4rem);
        height: max-content;
        top: calc(50% - 20rem);
        left: 2rem;
    }
`
export const ModalInner = styled.div`
    text-align: center;
    .cross {
        cursor: pointer;
        top: 2rem;
        right: 3.5rem;
        position: absolute; 
        background-color: ${darkColor};

        &::before,
        &::after {
            content: ""; 
            position: absolute; 
            top: 0;
            width: 24px; 
            height: 4px; 
            background-color: ${darkColor};
        }
        &::after {
            transform: rotate(45deg);
        }
        &::before {
            transform: rotate(-45deg);
        }
    }
`
import styled from "styled-components"
import { darkColor, whiteColor } from "../../style/Constants"

export const ModalContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${whiteColor};
    opacity: 0.75;
`
export const ModalContent = styled.div`
    position: relative;
    z-index: 2;
    width: 35rem;
    height: 20rem;
    background-color: ${darkColor};
    border-radius: 2rem;
`
import styled from "styled-components"
import { darkColor, whiteColor } from "../../../DefaultStyles.ts"

export const Footer = styled.div`
    width: 100%;
    min-height: 90px;
    background-color: ${(props) => props.theme == "sun"?whiteColor:darkColor};
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-top: 2px solid ${(props) => props.theme == "sun"?darkColor:whiteColor};

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`

export const FooterInner = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 100px;
    row-gap: 3rem;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    background-color: transparent;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        row-gap: 20px;
    }
`
export const Navigation = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
    min-width: 20rem;

    @media screen and (max-width: 576px) {
        flex-wrap: wrap;
    }
`
export const NavigationItem = styled.li`
    margin-right: 20px;

    &:last-of-type {
        margin-right: 0;
    }

    .navigation__link {
        font-family: "Tahoma";
        text-decoration: none;
        color: ${(props) => props.theme == "sun"?darkColor:whiteColor };
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s easy-in-out;

        &:hover {
            filter: contrast(1.5)
        }
    }
`
export const SocialLogos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 25px;
    background-color: ${(props) => props.theme == "sun"?"none":whiteColor};
    padding: ${(props) => props.theme == "sun"?"none":".5rem 3rem .5rem 2.5rem"};
    border-radius: ${(props) => props.theme == "sun"?"none":"1rem"};

    a {
        height: 35px;
    }
`
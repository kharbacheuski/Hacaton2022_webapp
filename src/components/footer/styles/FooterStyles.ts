import styled from "styled-components"
import { bloodColor, darkColor, whiteColor } from "../../../style/Constants"

export const Footer = styled.footer`
    width: 100%;
    min-height: 90px;
    background-color: ${(props) => props.theme === "sun"?whiteColor:darkColor};
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-top: 2px solid ${(props) => props.theme === "sun"?darkColor:whiteColor};

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`

export const FooterInner = styled.div`
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
    @media screen and (max-width: 576px) {
        padding: 30px 0;
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
        flex-direction: column;
        align-items: start;
        row-gap: 1rem;
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
        color: ${(props) => props.theme === "sun"?darkColor:whiteColor };
        font-size: 18px;
        line-height: 25px;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s;

        &:hover {
            color: ${bloodColor};
            display: block;
            transform: scale(1.1);
        }
    }
`
export const SocialLogos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 25px;

    a {
        height: 35px;
        transition: all .2s; 

        &:hover {
            transform: scale(1.2)
        }
        #tg circle {
            fill: ${(props) => props.theme === "sun"?"transparent":whiteColor};
        }
        #in path:nth-of-type(1) {
            fill: ${(props) => props.theme === "sun"?"transparent":whiteColor};
        }
        #vk {
            background-color: ${(props) => props.theme === "sun"?"transparent":whiteColor};
            border-radius: 50%;
        }

    }
`
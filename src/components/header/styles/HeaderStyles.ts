import styled from "styled-components"
import { darkColor, whiteColor } from "../../../DefaultStyles.ts"


export const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: transparent;

    &.fixed {
        border-bottom: 2px solid ${(props) => props.theme == 'sun'?darkColor:whiteColor};
        position: fixed;
        top: 0;
        letf: 0;
        background-color: ${(props) => props.theme == 'sun'?whiteColor:darkColor};
        z-index: 10;
    }
`

export const HeaderInner = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0 25px;
    align-items: center;
    background-color: transparent;

    @media screen and (max-width: 991px) {
        justify-content: end;
        padding: 0 10px;
    }

    .logo {
        margin-right: 50%;
        @media screen and (max-width: 1200px) {
            margin-right: 40%;
        }
        @media screen and (max-width: 991px) {
            position: absolute;
            left: 1rem;
        }
    }
    .themeIcon {
        position: absolute;
        right: 1rem;

        @media screen and (max-width: 991px) {
            position: static;
        }
    }
`
export const Navigation = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    transition: all 0.5s ease;

    @media screen and (max-width: 991px) {
        position: absolute;
        left: -100%;
        display: none;
        z-index: 3;
        
        &.open {
            width: 100%;
            height: 100vh;
            padding: 70px 30px;
            left: 0;
            top: 0;
            background-color: ${(props) => props.theme == 'sun'?whiteColor:darkColor};
            display: block;
    
            .navigation__link {
                color: ${(props) => props.theme == 'sun'?darkColor:whiteColor};
                line-height: 35px;    
            }
        }
    }
`
export const NavigationItem = styled.li`
    margin-right: 40px;

    &:last-of-type {
        margin-right: 0;
    }
    .navigation__link {
        text-decoration: none;
        color: ${(props) => props.theme== 'sun'?darkColor:whiteColor};
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        cursor: pointer;
        z-index: 2;
        transition: all 0.5s ease;
    
        &:hover {
            filter: contrast(1.5)
        }
    }
`
export const BurgerWrapper = styled.div`
    cursor: pointer;
`
export const Burger = styled.div`
    top: 0;
    width: 25px;
    height: 2px;
    background-color: ${(props) => props.theme == 'sun'?darkColor:whiteColor};
    display: none;
    margin: 8px 0;
    position: relative;
    z-index: 20;

    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        background-color: ${(props) => props.theme == 'sun'?darkColor:whiteColor};
    }
    &::before {
        top: 7px;
    }
    &::after {
        bottom: 7px;
    }

    @media screen and (max-width: 991px) {
        display: block;
        margin-right: 1rem;
    }

    &.cross {
        position: absolute; 
        top: 20px; 
        right: 10px;
        background-color: ${(props) => props.theme == 'sun'?whiteColor:darkColor};

        &::before,
        &::after {
            content: ""; 
            position: absolute; 
            top: 0;
            width: 24px; 
            height: 4px; 
            background-color: ${(props) => props.theme == 'sun'?darkColor:whiteColor};
        }
        &::after {
            transform: rotate(45deg);
        }
        &::before {
            transform: rotate(-45deg);
        }
    }
`
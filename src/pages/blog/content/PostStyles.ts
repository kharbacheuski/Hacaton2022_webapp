import styled from "styled-components"

import { darkColor, whiteColor } from "../../../DefaultStyles.ts"

export const PostContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

    @media screen and (max-width: 1200px) {
        margin-bottom: 60px;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 75px;
    }
    @media screen and (max-width: 576px) {
        margin-bottom: 65px;
    }
`
export const PostContentMain = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 60px;

    .simple__text {
        @media screen and (max-width: 991px) {
            grid-column: 1 / 3;
        }
    }
`
export const PostContentText = styled.div`
    margin-top: 60px;

    @media screen and (max-width: 1024px) {
        margin-top: 50px;
    }
    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`
export const TitleMain = styled.h1`
    font-family: Verdana;
    color: ${(props) => props.theme== 'sun'?darkColor:whiteColor};
    font-size: 35px;
    line-height: 50px;
    margin: 0 0 50px 0;
    font-weight: 700;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    transition: all 0.5s ease;

    @media screen and (max-width: 1024px) {
        font-size: 30px;
        line-height: 45px;
        margin: 0 0 35px 0;
    }
    @media screen and (max-width: 991px) {
        margin: 0 0 30px 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    @media screen and (max-width: 768px) {
        margin: 0 0 20px 0;
    }
    @media screen and (max-width: 576px) {
        font-size: 20px;
        line-height: 30px;
    }
`
export const ParagraphMain = styled.p`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    font-family: Verdana;
    color: ${(props) => props.theme== 'sun'?darkColor:whiteColor};
    margin: 0;
    transition: all 0.5s ease;

    @media screen and (max-width: 991px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }
` 
export const Image = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    margin-left: 50px;

    @media screen and (max-width: 1024px) {
        padding: 0;
        margin-left: 30px;
        margin-top: 0;
        max-height: none;
    }
    @media screen and (max-width: 991px) {
        margin: 0 0 30px 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
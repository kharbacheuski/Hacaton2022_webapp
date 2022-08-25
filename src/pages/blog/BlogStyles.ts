import styled, { createGlobalStyle } from "styled-components"
import { 
    breakpointSM, 
    darkColor, 
    whiteColor, 
    breakpointLG, 
    breakpointMD, 
    breakpointXL, 
    titleFontSize, 
    titleLineHeight, 
    pFontSize, 
    pLineHeight 
} from "../../style/Constants"


export const SwiperStyles = createGlobalStyle`
    .swiper-button-next, .swiper-button-prev {
        right: 300px;
        bottom: 0;
        top: initial;
        color: ${({theme}) => theme === "moon"?whiteColor:darkColor};

        @media screen and (max-width: ${breakpointLG}) {
            right: 100px;
        }
        @media screen and (max-width: ${breakpointSM}) {
            right: 20px;
        }
    }
    .swiper-button-prev {
        right: initial;
        left: 300px;

        @media screen and (max-width: ${breakpointLG}) {
            left: 100px;
        }
        @media screen and (max-width: ${breakpointSM}) {
            left: 20px;
        }
    }

`

export const Description = styled.div`
    height: 8rem;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme === "moon"?"transparent":whiteColor};
    border-bottom: 3px solid ${({theme}) => theme === "moon"?whiteColor:darkColor};

    @media screen and (max-width: ${breakpointLG}) {
        height: 5rem;
    }
`
export const PostPreview = styled.div`
    height: 600px;
    border: 3px solid ${({theme}) => theme === "moon"?whiteColor:darkColor};

    @media screen and (max-width: ${breakpointLG}) {
        height: 450px;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: calc(100% - 8rem);

        @media screen and (max-width: ${breakpointLG}) {
            height: calc(100% - 5rem);
        }
    }
`


export const PostContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

    @media screen and (max-width: ${breakpointXL}) {
        margin-bottom: 60px;
    }
    @media screen and (max-width: ${breakpointMD}) {
        margin-bottom: 75px;
    }
    @media screen and (max-width: ${breakpointSM}) {
        margin-bottom: 65px;
    }
`
export const PostContentMain = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 60px;

    .simple__text {
        @media screen and (max-width: ${breakpointLG}) {
            grid-column: 1 / 3;
        }
    }
`
export const PostContentText = styled.div`
    margin-top: 60px;

    @media screen and (max-width: ${breakpointLG}) {
        margin-top: 50px;
    }
    @media screen and (max-width: ${breakpointSM}) {
        margin-top: 40px;
    }
`
export const TitleMain = styled.h1`
    font-family: Verdana;
    color: ${(props) => props.theme === 'sun'?darkColor:whiteColor};
    font-size: ${titleFontSize};
    line-height: ${titleLineHeight};
    margin: 0 0 50px 0;
    font-weight: 700;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    transition: all 0.5s ease;

    @media screen and (max-width: ${breakpointLG}) {
        margin: 0 0 35px 0;
        margin: 0 0 30px 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    @media screen and (max-width: ${breakpointMD}) {
        margin: 0 0 20px 0;
    }
    @media screen and (max-width: ${breakpointSM}) {
        font-size: ${pFontSize};
        line-height: ${pLineHeight};
    }
`
export const ParagraphMain = styled.p`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    font-family: Verdana;
    color: ${(props) => props.theme === 'sun'?darkColor:whiteColor};
    margin: 0;
    transition: all 0.5s ease;

    @media screen and (max-width: ${breakpointLG}) {
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

    @media screen and (max-width: ${breakpointLG}) {
        padding: 0;
        margin-left: 30px;
        margin-top: 0;
        max-height: none;
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
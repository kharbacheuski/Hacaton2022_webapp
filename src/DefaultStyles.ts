import styled from "styled-components"

export const whiteColor = "#eeeeee"
export const darkColor = "#161616"
export const pFontSize = "15px"
export const pLineHeight = "25px"

export const Container = styled.div`
    margin: 5rem auto 8rem;
    max-width: 1100px;

    @media screen and (max-width: 1200px) {
        max-width: 900px;
    }
    @media screen and (max-width: 991px) {
        max-width: 700px;
        margin: 3rem auto 6rem;
    }
    @media screen and (max-width: 767px) {
        max-width: 550px;
    }
    @media screen and (max-width: 576px) {
        max-width: 100%;
        padding: 0 15px;
    }
`
export const Paragraph = styled.p`
    font-family: Verdana;
    color: ${(props) => props.theme== 'sun'?darkColor:whiteColor};
    font-weight: 400;
    margin: 0;
    transition: all 0.5s ease;
`
export const Title = styled.p`
    font-family: Verdana;
    color: ${(props) => props.theme== 'sun'?darkColor:whiteColor};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 0 0 10px 0;
    transition: all 0.5s ease;
`
export const TitleBig = styled(Title)`
    font-size: 35px;
    font-weight: 600;
    line-height: 50px;
`
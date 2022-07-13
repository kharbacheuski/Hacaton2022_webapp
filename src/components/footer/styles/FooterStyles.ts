import styled from "styled-components"

export const Footer = styled.div`
    width: 100%;
    min-height: 120px;
    background-color: #eeeeee;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`

export const FooterInner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 100px;
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
        color: #161616;
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
    column-gap: 25px;
`
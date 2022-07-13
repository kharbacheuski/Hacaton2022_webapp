import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;

    @media screen and (max-width: 1200px) {
        max-width: 900px;
    }
    @media screen and (max-width: 991px) {
        max-width: 700px;
    }
    @media screen and (max-width: 767px) {
        max-width: 550px;
    }
    @media screen and (max-width: 576px) {
        max-width: 100%;
        padding: 0 15px;
    }
`
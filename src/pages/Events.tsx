import React, {useContext} from "react";
import {AppContext} from "../context/context"
import {Paragraph, Title, Container} from "../style/General"

const Events = () => {
    const {appStates: {themeState}} = useContext(AppContext)
    
    return (
        <Container>
            <Title theme={themeState}>События, задания, инофрмация</Title>
        </Container>
    )

}

export default Events
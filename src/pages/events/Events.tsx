import React, {useContext} from "react";
import {AppContext} from "../../context"
import {Paragraph, Title, Container} from "../../style/General"

const Events = () => {
    const {appStates: {themeState}} = useContext(AppContext)
    
    return (
        <Container>
            <Title theme={themeState}>Events, tasks, information</Title>
        </Container>
    )

}

export default Events
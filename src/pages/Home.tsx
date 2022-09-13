import React, {useContext} from "react";
import {AppContext} from "../context/context"
import {Paragraph, Title, Container} from "../style/General"

const Home = () => {
    
    const {appStates} = useContext(AppContext)

    return <>
        <Container>
            <Title theme={appStates.themeState}>Домашняя страница</Title>
            <Paragraph theme={appStates.themeState}>
                На этом сайте вы можете узнать о текущих событиях, и заданиях
                в рамках вашей роли. Вы можете отликнуться на событие (Принять его / Отклонить).
                Также осуществляется рассылка в Телеграмм Боте.  
            </Paragraph>
        </Container>
    </>
}

export default Home
import React, {useContext} from "react";
import {AppContext} from "../context/context"
import {Paragraph, Title, Container} from "../style/General"
import { AppContextType } from "../types/types";

const Home = () => {
    
    const {appStates} = useContext<AppContextType>(AppContext)

    return <>
        <Container style={{minHeight: "100vh"}}>
            <Title theme={appStates.themeState}>Домашняя страница</Title>
            <Paragraph theme={appStates.themeState}>
                На этом сайте вы можете узнать о текущих событиях, и заданиях
                в рамках вашей роли. Вы можете отликнуться на событие (Принять его / Отклонить).
                Аналогичная рассылка осуществляется в <a href="https://t.me/VTBPlutosBot" style={{color: "inherit"}}>Телеграмм Боте</a>.  
            </Paragraph>
            <Paragraph theme={appStates.themeState} style={{marginTop: "5rem"}}>Ютуб-канал компании ООО "Технологии земледелия" - <a 
                style={{color: "inherit"}} href="https://www.youtube.com/c/TTZBY/featured">TTZ_BY</a>
            </Paragraph>
        
            <iframe style={{border: '4px solid black', marginTop: "1.5rem"}} 
                width="100%" height="540" src="https://www.youtube.com/embed/PokKzKmbxEs"
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </Container>
    </>
}

export default Home
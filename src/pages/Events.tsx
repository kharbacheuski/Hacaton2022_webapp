import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { chatApi } from "../api/api";
import {AppContext, LoadingContext} from "../context/context"
import {Paragraph, Title, Container, EventBlock, Button, EventsContainer} from "../style/General"
import { EventsList } from "../types/types";
import ModalEventStatus from "../components/modal/ModalEventStatus"

const Events = () => {
    const {appStates} = useContext(AppContext)
    const [eventsList, setEventsList] = useState<EventsList>([])
    const {setLoadingContext} = useContext(LoadingContext)
    const [eventStatus, setEventStatus] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoadingContext({loading: true})
            try {
                const events = (await chatApi.Events({telegramId: appStates.roleCode})).data
                console.log(events)
                setEventsList(events)
            }
            catch(e) {
                console.log(e)
            }
            finally {
                setLoadingContext({loading: false})
            }
        })()
    }, [appStates.phone])

    const takeEvent = async (eventId) => {
        try {
            const status = (await chatApi.ConfirmEvent({id: eventId})).data
            console.log(status)
            // setEventStatus(true)
        }
        catch(e) {
            console.log(e)
            // setEventStatus(false)
        }
    }

    return (
        <Container>
            <Title theme={appStates.themeState}>События, задания, инофрмация</Title>
            <Link to='/report' style={{textDecoration: "none"}}>
                <Button theme={appStates.themeState} style={{width: "30rem", marginTop: "5rem"}}>Отправить отчет</Button>
            </Link>
            <EventsContainer theme={appStates.themeState}>
                {eventsList.map(event => <>
                        <EventBlock theme={appStates.themeState}>
                            <Paragraph theme={appStates.themeState}>Задание для роли "{event?.roleCode}s"</Paragraph>
                            <Paragraph theme={appStates.themeState}>Описание: {event?.message}</Paragraph>
                            <Button style={{margin: "2rem auto 0 auto"}} theme={appStates.themeState} onClick={() => takeEvent(event?.id)}>Согласиться</Button>
                        </EventBlock>
                    </>
                )}
            </EventsContainer>
            {/* {eventStatus &&  <ModalEventStatus isOk={eventStatus}/> } */}
        </Container>
    )

}

export default Events
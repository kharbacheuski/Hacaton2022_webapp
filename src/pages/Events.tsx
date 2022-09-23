import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { chatApi } from "../api/api";
import {Paragraph, Title, Container, EventBlock, Button, EventsContainer} from "../style/General"
import { AppContextType, EventsList } from "../types/types";
import ModalEventStatus from "../components/modal/ModalEventStatus"
import { AppContext } from "../context/context";
import Ok from "../images/ok.png"
import NotOk from "../images/not_ok.png"

const Events = () => {
    const {appStates, setAppStates} = useContext<AppContextType>(AppContext)
    const [eventsList, setEventsList] = useState<EventsList>([])
    const [eventStatus, setEventStatus] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setAppStates({...appStates, loadingState: true})
            try {
                const events = (await chatApi.Events({telegramId: appStates.user.roleCode})).data
                console.log(events)
                setEventsList(events)
            }
            catch(e) {
                console.log(e)
            }
            finally {
                setAppStates({...appStates, loadingState: false})
            }
        })()
    }, [])

    const takeEvent = async (eventId) => {
        setAppStates({...appStates, loadingState: true})
        try {
            const status = (await chatApi.ConfirmEvent({id: eventId})).data
            console.log(status)
            setEventStatus(true)
        }
        catch(e) {
            console.log(e)
            setEventStatus(false)
        }
        finally {
            setAppStates({...appStates, modalState: true, loadingState: false})
        }
    }

    return (
        <Container style={{minHeight: "100vh"}}>
            <Title theme={appStates.themeState}>События, задания, инофрмация</Title>
            <Link to='/report' style={{textDecoration: "none", display: "block", width: "max-content"}}>
                <Button theme={appStates.themeState} style={{width: "30rem", marginTop: "5rem"}}>Отправить отчет</Button>
            </Link>
            <EventsContainer theme={appStates.themeState}>
                {eventsList.map(event => <>
                        <EventBlock theme={appStates.themeState}>
                            <Paragraph theme={appStates.themeState}>Задание для роли "{event?.roleCode}"</Paragraph>
                            <Paragraph theme={appStates.themeState}>Описание: {event?.message}</Paragraph>
                            <Button style={{margin: "2rem auto 0 auto"}} theme={appStates.themeState} onClick={() => takeEvent(event?.id)}>Согласиться</Button>
                        </EventBlock>
                    </>
                )}
            </EventsContainer>
            {appStates.modalState &&
            <ModalEventStatus message={
                eventStatus
                    ? <>
                        <img src={Ok} alt="" />
                        <Paragraph style={{marginTop: "2rem"}}>Вы приняли это задание</Paragraph>
                    </>
                    : <>
                        <img src={NotOk} alt="" />
                        <Paragraph style={{marginTop: "2rem"}}>Произошла ошибка</Paragraph>
                    </>
            }/>   
        }
        </Container>
    )

}

export default Events
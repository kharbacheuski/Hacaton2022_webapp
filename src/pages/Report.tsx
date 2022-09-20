import React, {useContext, useState} from "react";
import {AppContext} from "../context/context"
import {Paragraph, Title, Container, Input, Button, TextArea, FileUploadLabel } from "../style/General"
import { chatApi } from "../api/api";
import { AppContextType } from "../types/types";
import ModalEventStatus from "../components/modal/ModalEventStatus";
import Ok from "../images/ok.png"
import NotOk from "../images/not_ok.png"

const Report = () => {
    let formData = new FormData()
    const [coordinates, setCoordinates] = useState({
        longitude: -1,
        latitude: -1
    })
    const [isError, setIsError] = useState<boolean>(false)
    const [reportStatus, setReportStatus] = useState<boolean>(false)
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState<string>("")
    const {appStates, setAppStates} = useContext<AppContextType>(AppContext)

    const repHandle = async () => {
        setAppStates({...appStates, loadingState: true})
        try {
            console.log(message, appStates.user.telegramID)
            formData.append("file", image)
            const params = {
                telegramId: appStates.user.telegramID,
                text: message,
                longitude: coordinates.longitude,
                latitude: coordinates.latitude
            }
            const report = (await chatApi.Report(formData, params)).data;
            setIsError(false)
            setReportStatus(true)
        }
        catch(e) {
            setIsError(true)
            setReportStatus(false)
        }
        finally {
            setAppStates({...appStates, modalState: true, loadingState: false})
        }    
    }
    
    const coords = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords)
            setCoordinates({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
        })
    } 

    return <Container style={{minHeight: "100vh"}}>
        <Title theme={appStates.themeState}>Отчет</Title>
        <div style={{display: "flex", flexDirection: "column"}}>
            <Paragraph theme={appStates.themeState}>Введите текст сообщения: </Paragraph>
            <TextArea theme={appStates.themeState} placeholder="Сообщение" onChange={(e) => setMessage(e.target.value)} />
            <Paragraph theme={appStates.themeState} style={{marginTop: "2rem"}}>Выберите и отправьте фото: </Paragraph>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <FileUploadLabel theme={appStates.themeState}>
                    <Input id="fileupload" name="myfile" type="file" onChange={(e) => {
                        console.log(e.target.files[0])
                        setImage(e.target.files[0])
                    }} />
                    Выберите файл
                </FileUploadLabel>
                {image !== null &&<Paragraph style={{margin: "0 0 0 2rem"}} theme={appStates.themeState}>{image.name}</Paragraph>}
            </div>
        
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", margin: "2rem 0 0 0"}}>
                <Paragraph theme={appStates.themeState} style={{margin: "0 2rem 0 0"}}>Геолокация:</Paragraph>
                <Button theme={appStates.themeState} style={{margin: "0 2rem 0 0", width: "32rem"}} onClick={() => coords()}>Добавить в отчет</Button>
                {coordinates.longitude > -1 && <Paragraph theme={appStates.themeState} style={{margin: "0"}}>
                    Широта: {coordinates.latitude} <br />
                    Долгота: {coordinates.longitude} 
                </Paragraph>}
            </div>
            <Button theme={appStates.themeState} type="submit" onClick={() => repHandle()}>Отправить</Button>
        </div>

        {appStates.modalState &&
            <ModalEventStatus message={
                reportStatus
                    ? <>
                        <img src={Ok} alt="" />
                        <Paragraph style={{marginTop: "2rem"}}>Ваш отчет отправлен</Paragraph>
                    </>
                    : <>
                        <img src={NotOk} alt="" />
                        <Paragraph style={{marginTop: "2rem"}}>Произошла ошибка при отправке отчета. <br />Возможно вы не ввели текст сообщения</Paragraph>
                    </>
            }/>   
        }
    </Container>

}

export default Report
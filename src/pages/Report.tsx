import React, {useContext, useState} from "react";
import {AppContext, LoadingContext} from "../context/context"
import {Paragraph, Title, Container, Input, Button, TextArea, FileUploadLabel } from "../style/General"
import ThemeChangeButton from "../components/header/components/ThemeChangeButton";
import { chatApi } from "../api/api";
import { AppContextType, LoadingContextType } from "../types/types";
import { bloodColor, darkColor, whiteColor } from "../style/Constants";

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
    const {setLoadingContext} = useContext<LoadingContextType>(LoadingContext)

    const repHandle = async () => {
        setLoadingContext({loading: true})
        try {
            console.log(message, appStates.telegramID)
            formData.append("file", image)
            const params = {
                telegramId: appStates.telegramID,
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
            setLoadingContext({loading: false})
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

    return <Container>
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
            {reportStatus &&
                <Paragraph theme={appStates.themeState} style={{marginTop: "2rem", textAlign: "center", color: "#3fc647"}}>Отчет отправлен</Paragraph>}
            {isError &&
                <Paragraph theme={appStates.themeState} style={{marginTop: "2rem", textAlign: "center", color: bloodColor}}>
                    Произошла ошибка при отправке отчета 😔<br/>Может быть Вы не ввели текст сообщения.
                </Paragraph>}

        </div>
    </Container>

}

export default Report
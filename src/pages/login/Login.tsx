import React, {useContext, useState} from "react";
import {AppContext, LoadingContext} from "../../context"
import {Paragraph, Title, Container, Input, Button } from "../../style/General"
import Eye from "../../images/login/eye.svg"
import ThemeChangeButton from "../../components/header/components/ThemeChangeButton";
import { chatApi } from "../../api/api";
import { AppContextType, LoadingContextType } from "../../types";
import { bloodColor, darkColor } from "../../style/Constants";

const Login = () => {
    const [isError, setIsError] = useState<boolean>(false)
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string | number>("")
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const {appStates, setAppStates} = useContext<AppContextType>(AppContext)
    const {setLoadingContext} = useContext<LoadingContextType>(LoadingContext)

    const authHandle = async () => {
        setLoadingContext({loading: true})
        try {
            const login = await chatApi.Login({
                phoneNumber: phone[0] == "+"?phone:"+"+phone
            });
            setAppStates({...appStates, isAuth: true}) 
            sessionStorage.setItem('isAuth', "true")
            setIsError(false)
        }
        catch(e) {
            setIsError(true)
            sessionStorage.setItem('isAuth', "false")
            console.log(e)
        }
        finally {
            setLoadingContext({loading: false})
        }
    }
    
    return <Container style={{
        height: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        margin: "0 auto"}}>
        <Title theme={appStates.themeState}>Please Login</Title>
        <Paragraph theme={appStates.themeState}>
            Enter your phone number and company's password! 
        </Paragraph>
        <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            <Input autoComplete="true" theme={appStates.themeState} placeholder="Phone Number" type="text" style={{margin: "1rem 0 0.5rem"}} onChange={(e) => setPhone(e.target.value)} />
            {isError && <Paragraph style={{color: bloodColor}}>Phone number invalid! Maybe you're not registered...</Paragraph>}
            {/* <div style={{display: "flex", flexDirection: "row", columnGap: "0.5rem", position: "relative"}}>           
                <Input autoComplete="true" theme={appStates.themeState} placeholder="Password" type={isPasswordVisible?"password":"text"} onChange={(e) => setPassword(e.target.value)} />
                <div style={{cursor: "pointer", position: "absolute", right: "0.7rem", top: "0.3rem" }} onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <img src={Eye} alt="" />
                </div>
            </div> */}
        </div>
        <Button theme={appStates.themeState} onClick={() => authHandle()}>Send</Button>
        <div style={{position: "absolute", top: "1rem", right: "1rem"}}><ThemeChangeButton /></div>
        <Paragraph theme={appStates.themeState}>Not registered? Register you phone number in our <a style={{textDecoration: "underlined", color: darkColor}} href="">Telegram Bot</a></Paragraph>
    </Container>

}

export default Login
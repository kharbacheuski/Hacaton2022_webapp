import React, {useContext} from "react";
import {useForm} from 'react-hook-form';
import {AppContext} from "../../context"
import { AppContextType } from "../../types"; 
import {Paragraph, Title, Container} from "../../style/General"
import { PlayerButton } from "../../components/player-widget/PlayerStyles";

const Login = () => {
    const {handleSubmit} = useForm();
    const {appStates: {themeState, isAuth}, setAppStates} = useContext(AppContext)
    console.log(isAuth)
    const authHandle = async (phoneNumber) => {
        try {
            console.log("is you auth?", phoneNumber)
            // request
            setAppStates({isAuth: true}) 
        }
        catch (e){
            console.log(e)
        }
    }
    
    return <Container>
        <Title theme={themeState}>Please Login</Title>
        <Paragraph theme={themeState}>
            Enter your phone number! 
        </Paragraph>
        <form onSubmit={authHandle}>
            <input type="text" />
            <PlayerButton theme={themeState} type='submit'>Send</PlayerButton>
        </form>
    </Container>

}

export default Login
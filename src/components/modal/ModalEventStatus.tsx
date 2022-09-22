import React, { useContext } from "react";
import { Button, Paragraph } from "../../style/General";
import { AppContext } from "../../context/context";
import { ModalBackground, ModalContentWrapper, ModalInner } from "./Modal.styles";
import { AppContextType } from "../../types/types";
import { darkColor, whiteColor } from "../../style/Constants";

const ModalEventStatus = ({message}) => {

    const {appStates, setAppStates} = useContext<AppContextType>(AppContext)

    return <>
        <ModalBackground theme={appStates.themeState} />
        <ModalContentWrapper theme={appStates.themeState}>
            <ModalInner theme={appStates.themeState}>
            <div className="cross" onClick={() => setAppStates({...appStates, modalState: false})}></div>
            {message}
            <Button style={{backgroundColor: darkColor, color: whiteColor, borderRadius: "3rem", margin: "2rem auto 1rem"}} onClick={() => setAppStates({...appStates, modalState: false})}>Окей</Button>
            </ModalInner>
        </ModalContentWrapper>
    </>
}
    

export default ModalEventStatus

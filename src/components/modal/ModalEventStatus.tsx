import React, { useContext} from "react";
import { Paragraph } from "../../style/General";
import { AppContext } from "../../context/context";
import { ModalContainer, ModalContent } from "./Modal.styles";

const ModalEventStatus = ({isOk}) => {

    const {appStates} = useContext(AppContext)

    return (
        isOk
        ? <>
            <ModalContainer>
                <ModalContent>
                    <Paragraph theme={appStates.appStates}>Заявка принята!</Paragraph>
                </ModalContent>
            </ModalContainer>
        </>
        : <>
            <ModalContainer>
                <ModalContent>
                    <Paragraph theme={appStates.appStates}>Ошибка!</Paragraph>
                </ModalContent>
            </ModalContainer>
        </>
    )
}
    

export default ModalEventStatus

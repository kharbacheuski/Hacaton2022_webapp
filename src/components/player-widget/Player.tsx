import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context";
import { Paragraph } from "../../style/General";
import { Stop, Play, PlayerButton, WidgetPlayer } from "./PlayerStyles";
import "./moveScript"

const Player = ({isWidget}) => {
    const [audio]= useState(new Audio("http://maximum.hostingradio.ru/grunge96.aacp"));
    const {appStates, setAppStates} = useContext(AppContext)

    useEffect(() => {
        appStates.musicState ? audio.play() : audio.pause();
    },[appStates.musicState]);

    useEffect(() => {
        audio.addEventListener('ended', () => setAppStates({...appStates, musicState: false}));
        
        return () => {
            audio.removeEventListener('ended', () => setAppStates({...appStates, musicState: false}));
        };
    }, []);

    return (
        isWidget 
        ? <>
            <WidgetPlayer id="player" theme={appStates.themeState} >
                <div onClick={() => setAppStates({...appStates, musicState: !appStates.musicState}) }>
                    {appStates.musicState 
                        ? <Play theme={appStates.themeState} /> 
                        : <Stop theme={appStates.themeState} />}
                </div>
                <Paragraph style={{position: "absolute", left: "4rem"}}>Grunge</Paragraph>
            </WidgetPlayer>
        </>
        : <>
            <Paragraph theme={appStates.themeState} style={{fontSize: "25px", marginTop: "3rem"}}>Rock, Grunge</Paragraph>
            <PlayerButton theme={appStates.themeState} onClick={() => setAppStates({...appStates, musicState: !appStates.musicState}) }>{appStates.musicState ? "Pause" : "Play"}</PlayerButton>
        </>
	)
};

export default Player;
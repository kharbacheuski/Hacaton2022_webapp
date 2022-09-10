import React, {  useEffect, useContext} from "react";
import Sun from "../../../images/header/sun.png"
import Moon from "../../../images/header/moon.png"
import {AppContext} from './../../../context'

const ThemeChangeButton = () => {
    const {appStates, setAppStates} = useContext(AppContext)

    return (
        <a id="themeIcon" className="themeIcon" style={{height: "35px", cursor: "pointer"}} onClick={() => setAppStates({...appStates, themeState: appStates.themeState === "sun"?"moon":"sun"})}>
            <img width="30px" src={appStates.themeState === "sun"?Moon:Sun} alt="" />
        </a>
    )

}

export default ThemeChangeButton
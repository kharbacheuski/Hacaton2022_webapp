import React, {  useEffect, useContext} from "react";
import Sun from "../../../images/header/sun.png"
import Moon from "../../../images/header/moon.png"
import {ThemeContext} from './../../../context'

const ThemeChangeButton = () => {

    const page = document.getElementById('page')
    const {themeState, setThemeState} = useContext(ThemeContext)

    useEffect(() => {
        (async () => {
            page?.setAttribute('theme', themeState)
            document.body.setAttribute('theme', themeState)
            localStorage.setItem("theme", themeState)
        })()
    }, [themeState])

    return (
        <a id="themeIcon" className="themeIcon" style={{height: "35px", cursor: "pointer"}} onClick={() => setThemeState(themeState === "sun"?"moon":"sun")}>
            <img width="30px" src={themeState === "sun"?Moon:Sun} alt="" />
        </a>
    )

}

export default ThemeChangeButton
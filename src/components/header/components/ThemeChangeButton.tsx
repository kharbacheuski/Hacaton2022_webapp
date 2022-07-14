import React, {  useEffect, useContext} from "react";
import Sun from "../../../images/header/sun.png"
import Moon from "../../../images/header/moon.png"
import {ThemeContext} from './../../../context.ts'

const ThemeChangeButton = () => {

    const {themeState, setThemeState} = useContext(ThemeContext)

    useEffect(() => {
        const page = document.getElementById('page')
        page?.setAttribute('theme', themeState)
        localStorage.setItem("theme", themeState)
    }, [themeState])

    return <>
        <div id="themeIcon" className="themeIcon" style={{height: "35px"}} onClick={() => setThemeState(themeState == "sun"?"moon":"sun")}>
            <img width="30px" src={themeState == "sun"?Moon:Sun} alt="" />
        </div>
    </>
}

export default ThemeChangeButton
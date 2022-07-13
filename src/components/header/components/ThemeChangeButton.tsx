import React, {  useEffect, useContext} from "react";
import Sun from "../../../images/header/sun.png"
import Moon from "../../../images/header/moon.png"
import {ThemeContext} from './../../../context.ts'

const ThemeChangeButton = () => {

    const {themeState, setThemeState} = useContext(ThemeContext)

    useEffect(() => {
        const page = document.getElementById('page')
        page?.setAttribute('theme', themeState)
    }, [themeState])

    return <>
        <div className="themeIcon" style={{height: "35px"}} onClick={() => setThemeState(themeState == "sun"?"moon":"sun")}>
            {themeState == "sun" 
                ? <img width="30px" src={Moon} alt="" />
                : <img width="30px" src={Sun} alt="" />
            }
        </div>
    </>
}

export default ThemeChangeButton
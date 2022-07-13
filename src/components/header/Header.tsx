import React, { useContext } from "react";
import { Header, HeaderInner } from "./styles/HeaderStyles.ts";
import HeaderNavigation from "./components/HeaderNavigation.tsx";
import ThemeChangeButton from "./components/ThemeChangeButton.tsx"
import "./scripts/HeaderScripts.ts"
import {ThemeContext} from './../../context.ts'

const SiteHeader = () => {

    const {themeState} = useContext(ThemeContext)
    
    return <>
        <Header className="header" id="header" theme={themeState}>
            <HeaderInner className="header__inner">
                <a className="logo" href="/" style={{width: "20px", height: "20px", border: `2px solid ${themeState == "sun"?'#161616':"#eeeeee"}`, justifySelf: "start"}}></a>
                <HeaderNavigation />
                <ThemeChangeButton />
            </HeaderInner>
        </Header>
    </>
}

export default SiteHeader
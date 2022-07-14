import React, { useContext } from "react";
import { Header, HeaderInner, Logo } from "./styles/HeaderStyles.ts";
import HeaderNavigation from "./components/HeaderNavigation.tsx";
import ThemeChangeButton from "./components/ThemeChangeButton.tsx"
import "./scripts/HeaderScripts.ts"
import {ThemeContext} from './../../context.ts'
import {darkColor, whiteColor} from "../../DefaultStyles.ts"

const SiteHeader = () => {

    const {themeState} = useContext(ThemeContext)
    
    return <>
        <Header className="header" id="header" theme={themeState}>
            <HeaderInner className="header__inner">
                <Logo theme={themeState} href="/" className="logo">Hust</Logo>
                <HeaderNavigation />
                <ThemeChangeButton />
            </HeaderInner>
        </Header>
    </>
}

export default SiteHeader
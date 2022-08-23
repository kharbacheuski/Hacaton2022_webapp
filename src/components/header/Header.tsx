import React, { useContext } from "react";
import { Header, HeaderInner, Logo } from "./styles/HeaderStyles";
import HeaderNavigation from "./components/HeaderNavigation";
import ThemeChangeButton from "./components/ThemeChangeButton"
import "./scripts/HeaderScripts"
import {ThemeContext} from './../../context'

const SiteHeader = () => {
    const {themeState} = useContext(ThemeContext)
    return (
        <Header className="header" id="header" theme={themeState}>
            <HeaderInner className="header__inner">
                <Logo theme={themeState} href="/" className="logo">Hust</Logo>
                <HeaderNavigation />
                <ThemeChangeButton />
            </HeaderInner>
        </Header>
    )
}

export default SiteHeader
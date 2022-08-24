import React, { useContext, useEffect } from "react";
import { Header, HeaderInner, Logo } from "./styles/HeaderStyles";
import HeaderNavigation from "./components/HeaderNavigation";
import ThemeChangeButton from "./components/ThemeChangeButton"
import "./scripts/HeaderScripts"
import {ThemeContext} from './../../context'
import { stickyHeaderHandler } from "./scripts/HeaderScripts";

const SiteHeader = () => {
    
    const {themeState} = useContext(ThemeContext)

    useEffect(() => {
        stickyHeaderHandler()
    }, [themeState])

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
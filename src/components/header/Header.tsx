import React, { useContext, useEffect } from "react";
import { Header, HeaderInner, Logo } from "./styles/HeaderStyles";
import HeaderNavigation from "./components/HeaderNavigation";
import ThemeChangeButton from "./components/ThemeChangeButton"
import "./scripts/HeaderScripts"
import {AppContext} from '../../context/context'
import { stickyHeaderHandler } from "./scripts/HeaderScripts";

const SiteHeader = () => {
    
    const {appStates} = useContext(AppContext)

    useEffect(() => {
        stickyHeaderHandler()
    }, [appStates.themeState])

    return appStates.user.isAuth && (
        <Header className="header" id="header" theme={appStates.themeState}>
            <HeaderInner className="header__inner">
                <Logo theme={appStates.themeState} href="/" className="logo">Agro</Logo>
                <HeaderNavigation />
                <ThemeChangeButton />
            </HeaderInner>
        </Header>
    )
}

export default SiteHeader
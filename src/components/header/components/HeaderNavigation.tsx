import React, { useContext} from "react";
import { Navigation, NavigationItem, Burger, BurgerWrapper } from "../styles/HeaderStyles";
import { Link } from "react-router-dom";
import { OpenCloseHeader } from "../scripts/HeaderScripts";
import {AppContext} from '../../../context/context'

const HeaderNavigation = () => {

    const {appStates: {themeState}} = useContext(AppContext)

    return <>
        <Navigation theme={themeState} className="navigation" id="navigation">
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/">Дом</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/events">События</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/blog">Блог</Link>
            </NavigationItem>
        </Navigation>
        <BurgerWrapper id="burger__wrapper" theme={themeState} onClick={() => OpenCloseHeader()}>
            <Burger theme={themeState} id="burger"/>
        </BurgerWrapper>
    </>
}

export default HeaderNavigation

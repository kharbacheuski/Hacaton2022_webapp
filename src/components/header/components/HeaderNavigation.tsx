import React, { useContext} from "react";
import { Navigation, NavigationItem, Burger, BurgerWrapper } from "../styles/HeaderStyles.ts";
import { Link } from "react-router-dom";
import { OpenCloseHeader } from "../scripts/HeaderScripts.ts";
import {ThemeContext} from './../../../context.ts'

const HeaderNavigation = () => {

    const {themeState} = useContext(ThemeContext)

    return <>
        <Navigation theme={themeState} className="navigation" id="navigation">
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/">Home</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/about">About</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/privacy">Privacy</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/contact">Contact Us</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link onClick={(e) => OpenCloseHeader(e)} className="navigation__link" to="/blog">Blog</Link>
            </NavigationItem>
        </Navigation>
        <BurgerWrapper id="burger__wrapper" theme={themeState} onClick={() => OpenCloseHeader()}>
            <Burger theme={themeState} id="burger"/>
        </BurgerWrapper>
    </>
}

export default HeaderNavigation
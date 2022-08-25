import React, {useContext} from "react";
import { Navigation, NavigationItem } from "../styles/FooterStyles";
import { Link } from "react-router-dom";
import {AppContext} from './../../../context'

const FooterNavigation = () => {

    const {appStates: {themeState}} = useContext(AppContext)

    return <>
        <Navigation theme={themeState} className="navigation" id="navigation">
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/">Home</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/about">About</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/blog">Blog</Link>
            </NavigationItem>
        </Navigation>
    </>
}

export default FooterNavigation
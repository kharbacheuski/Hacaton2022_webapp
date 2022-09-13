import React, {useContext} from "react";
import { Navigation, NavigationItem } from "../styles/FooterStyles";
import { Link } from "react-router-dom";
import {AppContext} from '../../../context/context'

const FooterNavigation = () => {

    const {appStates: {themeState}} = useContext(AppContext)

    return <>
        <Navigation theme={themeState} className="navigation" id="navigation">
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/">Дом</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/events">События</Link>
            </NavigationItem>
            <NavigationItem theme={themeState}>
                <Link className="navigation__link" to="/blog">Блог</Link>
            </NavigationItem>
        </Navigation>
    </>
}

export default FooterNavigation
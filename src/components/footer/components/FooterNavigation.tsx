import React from "react";
import { Navigation, NavigationItem } from "../styles/FooterStyles.ts";
import { Link } from "react-router-dom";

const FooterNavigation = () => {

    return <>
        <Navigation className="navigation" id="navigation">
            <NavigationItem>
                <Link className="navigation__link" to="/">Home</Link>
            </NavigationItem>
            <NavigationItem>
                <Link className="navigation__link" to="/about">About</Link>
            </NavigationItem>
            <NavigationItem>
                <Link className="navigation__link" to="/privacy">Privacy</Link>
            </NavigationItem>
            <NavigationItem>
                <Link className="navigation__link" to="/contact">Contact Us</Link>
            </NavigationItem>
            <NavigationItem>
                <Link className="navigation__link" to="/blog">Blog</Link>
            </NavigationItem>
        </Navigation>
    </>
}

export default FooterNavigation
import React, {useContext} from "react";
import { Footer, FooterInner, SocialLogos } from "./styles/FooterStyles.ts";
import VKLogo from "../../images/footer/vk.svg";
import TGLogo from "../../images/footer/tg.svg";
import INLogo from "../../images/footer/in.svg";
import FooterNavigation from "./components/FooterNavigation.tsx";
import {Paragraph} from "../../DefaultStyles.ts"
import {ThemeContext} from "../../context.ts"

const SiteFooter = () => {

    const {themeState} = useContext(ThemeContext)

    return <>
        <Footer theme={themeState} className="footer" id="footer">
            <FooterInner className="footer__inner">
                <SocialLogos theme={themeState} className="social__logos" >
                    <a target="_blank" rel="noreferrer" href="https://vk.com/flipperralfi"><img src={VKLogo} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://t.me/flipperralfi"><img src={TGLogo} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kiryl-harbacheuski-293b42243/"><img src={INLogo} alt="" /></a>
                </SocialLogos>
                <FooterNavigation/>
                <Paragraph theme={themeState}>Prod by Kiryl Harbacheuski using ReactJS</Paragraph>
            </FooterInner>
        </Footer>
    </>
}

export default SiteFooter
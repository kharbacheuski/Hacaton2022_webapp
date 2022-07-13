import React from "react";
import { Footer, FooterInner, SocialLogos } from "./styles/FooterStyles.ts";
import VKLogo from "../../images/footer/vk.svg";
import TGLogo from "../../images/footer/tg.svg";
import INLogo from "../../images/footer/in.svg";
import FooterNavigation from "./components/FooterNavigation.tsx";

const SiteFooter = () => {

    return <>
        <Footer className="footer" id="footer">
            <FooterInner className="footer__inner">
                <SocialLogos className="social__logos" >
                    <a target="_blank" href="https://vk.com/flipperralfi"><img src={VKLogo} alt="" /></a>
                    <a target="_blank" href="https://t.me/flipperralfi"><img src={TGLogo} alt="" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/kiryl-harbacheuski-293b42243/"><img src={INLogo} alt="" /></a>
                </SocialLogos>
                <FooterNavigation />
            </FooterInner>
        </Footer>
    </>
}

export default SiteFooter
import React, {useContext} from "react";
import { Footer, FooterInner, SocialLogos } from "./styles/FooterStyles";
import FooterNavigation from "./components/FooterNavigation";
import {Paragraph} from "../../style/General"
import {AppContext} from "../../context/context"

const SiteFooter = () => {

    const {appStates} = useContext(AppContext)

    return appStates.user.isAuth && <>
        <Footer theme={appStates.themeState} className="footer" id="footer">
            <FooterInner className="footer__inner">
                <SocialLogos theme={appStates.themeState} className="social__logos" >
                    <a target="_blank" rel="noreferrer" href="https://t.me/AgroEventBot">
                        <svg id="tg" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px" baseProfile="basic"><circle cx="25" cy="25" r="22" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/><path d="M34.088,16.035c0.275,0,0.521,0.045,0.729,0.146c0.473,0.227,0.714,0.734,0.641,1.499	c-0.242,2.523-2.205,15.329-2.623,16.613c-0.358,1.098-0.735,2.042-1.453,2.042c-0.718,0-1.502-0.25-2.275-0.803	c-0.773-0.552-5.906-3.995-6.619-4.444c-0.625-0.394-1.286-1.377-0.355-2.327c0.767-0.782,6.585-6.429,7.082-6.926	c0.37-0.371,0.196-0.818-0.167-0.818c-0.125,0-0.273,0.053-0.428,0.18c-0.608,0.497-9.085,6.169-9.819,6.625	c-0.486,0.302-1.238,0.52-2.019,0.52c-0.333,0-0.671-0.04-0.995-0.129c-1.128-0.311-3.037-0.89-3.795-1.16	c-0.729-0.26-0.993-0.51-0.993-0.956c0-0.634,0.894-1.071,1.837-1.472c0.996-0.423,18.231-7.742,19.579-8.227	C33.039,16.172,33.609,16.035,34.088,16.035 M34.088,14.035c-0.684,0-1.453,0.158-2.352,0.482	c-1.396,0.503-17.815,7.475-19.683,8.268c-1.068,0.454-3.056,1.299-3.056,3.313c0,1.335,0.781,2.29,2.321,2.84	c0.828,0.295,2.795,0.89,3.936,1.204c0.484,0.133,0.998,0.201,1.527,0.201c1.035,0,2.076-0.258,2.892-0.713	c-0.007,0.168-0.001,0.338,0.019,0.508c0.123,1.05,0.77,2.038,1.73,2.643c0.628,0.396,5.757,3.833,6.523,4.379	c1.076,0.769,2.265,1.175,3.437,1.175c2.24,0,2.993-2.312,3.355-3.423c0.525-1.613,2.49-14.729,2.712-17.042	c0.151-1.585-0.51-2.891-1.768-3.493C35.21,14.15,34.673,14.035,34.088,14.035L34.088,14.035z"/></svg>
                    </a>
                </SocialLogos>
                <FooterNavigation/>
                {/* <Paragraph theme={appStates.themeState}>Разработал Кирилл Горбачевский, используя ReactJS</Paragraph> */}
            </FooterInner>
        </Footer>
    </>
}

export default SiteFooter
import React, {useContext} from "react";
import { Footer, FooterInner, SocialLogos } from "./styles/FooterStyles";
import FooterNavigation from "./components/FooterNavigation";
import {Paragraph} from "../../style/General"
import {AppContext} from "../../context"

const SiteFooter = () => {

    const {appStates: {themeState}} = useContext(AppContext)

    return <>
        <Footer theme={themeState} className="footer" id="footer">
            <FooterInner className="footer__inner">
                <SocialLogos theme={themeState} className="social__logos" >
                    <a target="_blank" rel="noreferrer" href="https://vk.com/flipperralfi">
                        <svg id="vk" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="2 2 46 46" width="35px" height="35px"><path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M34.973,29.535c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557c-1.397-0.915-2.86-2.689-3.889-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.827,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.441,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393c0.232-0.133,0.225-0.13,0.543-0.13c0.318,0,3.507-0.025,4.207-0.025c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.515,2.607-2.234,4.797C32.944,27.793,32.63,27.457,34.973,29.535z"/><path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M25 3A22 22 0 1 0 25 47A22 22 0 1 0 25 3Z"/></svg>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://t.me/flipperralfi">
                        <svg id="tg" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px" baseProfile="basic"><circle cx="25" cy="25" r="22" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/><path d="M34.088,16.035c0.275,0,0.521,0.045,0.729,0.146c0.473,0.227,0.714,0.734,0.641,1.499	c-0.242,2.523-2.205,15.329-2.623,16.613c-0.358,1.098-0.735,2.042-1.453,2.042c-0.718,0-1.502-0.25-2.275-0.803	c-0.773-0.552-5.906-3.995-6.619-4.444c-0.625-0.394-1.286-1.377-0.355-2.327c0.767-0.782,6.585-6.429,7.082-6.926	c0.37-0.371,0.196-0.818-0.167-0.818c-0.125,0-0.273,0.053-0.428,0.18c-0.608,0.497-9.085,6.169-9.819,6.625	c-0.486,0.302-1.238,0.52-2.019,0.52c-0.333,0-0.671-0.04-0.995-0.129c-1.128-0.311-3.037-0.89-3.795-1.16	c-0.729-0.26-0.993-0.51-0.993-0.956c0-0.634,0.894-1.071,1.837-1.472c0.996-0.423,18.231-7.742,19.579-8.227	C33.039,16.172,33.609,16.035,34.088,16.035 M34.088,14.035c-0.684,0-1.453,0.158-2.352,0.482	c-1.396,0.503-17.815,7.475-19.683,8.268c-1.068,0.454-3.056,1.299-3.056,3.313c0,1.335,0.781,2.29,2.321,2.84	c0.828,0.295,2.795,0.89,3.936,1.204c0.484,0.133,0.998,0.201,1.527,0.201c1.035,0,2.076-0.258,2.892-0.713	c-0.007,0.168-0.001,0.338,0.019,0.508c0.123,1.05,0.77,2.038,1.73,2.643c0.628,0.396,5.757,3.833,6.523,4.379	c1.076,0.769,2.265,1.175,3.437,1.175c2.24,0,2.993-2.312,3.355-3.423c0.525-1.613,2.49-14.729,2.712-17.042	c0.151-1.585-0.51-2.891-1.768-3.493C35.21,14.15,34.673,14.035,34.088,14.035L34.088,14.035z"/></svg>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kiryl-harbacheuski-293b42243/">
                        <svg id="in" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M25 3A22 22 0 1 0 25 47A22 22 0 1 0 25 3Z"/><path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M16 13A2 2 0 1 0 16 17A2 2 0 1 0 16 13Z"/><path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M14 20H18V35H14zM30.5 20c-1.748 0-3.332.694-4.5 1.816V20h-4v15h4v-7.5c0-1.925 1.575-3.5 3.5-3.5s3.5 1.575 3.5 3.5V30v5h4v-8.5C37 22.91 34.09 20 30.5 20z"/></svg>
                    </a>
                </SocialLogos>
                <FooterNavigation/>
                <Paragraph theme={themeState}>Prod by Kiryl Harbacheuski using ReactJS</Paragraph>
            </FooterInner>
        </Footer>
    </>
}

export default SiteFooter
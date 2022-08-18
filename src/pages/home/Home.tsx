import React, {useContext} from "react";
import {ThemeContext} from "../../context"
import Stairs from "../../images/stairs.jpg"
import Pont from "../../images/pont.jpg"
import { TitleBig, Container, Paragraph } from "../../DefaultStyles";

const Home = () => {

    const {themeState} = useContext(ThemeContext)

    return <Container>
        <TitleBig theme={themeState}>It`s HOME page! Welcome! : )</TitleBig>
        <Paragraph theme={themeState}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
        </Paragraph>
        <img src={Stairs} style={{width: "100%", height: "45rem", objectFit: "cover", margin: "3rem 0"}} alt="" />
        <br />
        <Paragraph theme={themeState}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
        </Paragraph>
        <img src={Pont} style={{width: "100%", height: "26rem", objectFit: "cover", margin: "3rem 0"}} alt="" />
        <br />
        <Paragraph theme={themeState}>
            b\sb L\dsem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumdfhndffnadfbque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
        </Paragraph>
        <br />
        <Paragraph theme={themeState}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
        </Paragraph>
    </Container>

}

export default Home
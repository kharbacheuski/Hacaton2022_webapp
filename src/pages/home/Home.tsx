import React, {useContext} from "react";
import {AppContext} from "../../context"
import Heaven from "../../images/home/heaven.jpg"
import Heaven2 from "../../images/home/heaven-2.jpg"
import {Paragraph, Title, Container} from "../../style/General"

const Home = () => {
    
    const {appStates: {themeState}} = useContext(AppContext)
    
    return <Container>
        <Title theme={themeState}>Just website with images and "lorem" text</Title>
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
        <img src={Heaven} style={{width: "100%", height: "45rem", objectFit: "cover", margin: "3rem 0"}} alt="" />
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
        <img src={Heaven2} style={{width: "100%", height: "26rem", objectFit: "cover", margin: "3rem 0"}} alt="" />
        <Paragraph theme={themeState}>
            b\sb L\dsem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
            mollitia cumdfhndffnadfbque sint quia aspernatur quae alias excepturi magni ad deserunt, recusandae 
            expedita dolore incidunt minus exercitationem fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem quaerat impedit 
        </Paragraph>
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
import React, {useContext, useEffect, useState} from "react";
import {Paragraph, Container, Select, Input } from "../../../style/General"
import { PostContent, PostContentMain, TitleMain } from "../BlogStyles";
import {AppContext} from '../../../context'
import { hustApi } from "../../../api/hustAPI";

const Post = () => {

    const {appStates: {themeState}} = useContext(AppContext)
    const [fact, setFact] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [type, setType] = useState<string>("")

    useEffect(() => {
        number && type &&
        (async () => {
            try {
                const {data} = await hustApi.getFacts(number, type);
                setFact(data)
            }
            catch(error) {
                console.log(error)
            }
        })()
    }, [number, type])

    return <>
        <Container className="container">
            <PostContent className="feed__content">
                <TitleMain theme={themeState} className="title_main">  
                    Facts instead of numbers 
                </TitleMain>
                <PostContentMain className="feed__content__main"> 
                    <div>
                        <Paragraph theme={themeState} className="simple__text">  
                            <span>Enter number: </span><Input theme={themeState} type={"text"} onChange={(event) => setNumber(event.target.value)}></Input>
                        </Paragraph>
                        <Paragraph theme={themeState} className="simple__text">  
                            <span>Enter type: </span>
                            <Select theme={themeState} name="pets" id="pet-select" onChange={(e) => setType(e.target.value)}>
                                <option value="">Choose a type</option>
                                <option value="trivia">Trivia</option>
                                <option value="math">Math</option>
                                <option value="date">Date(mm/dd)</option>
                            </Select>
                        </Paragraph>
                    </div>
                    <Paragraph theme={themeState} className="simple__text">  
                        Fact: {fact}
                    </Paragraph>
                </PostContentMain> 
            </PostContent>
        </Container>
    </>
}

export default Post
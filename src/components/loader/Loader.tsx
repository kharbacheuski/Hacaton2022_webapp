import React, { useContext} from "react";
import { Loader, Paragraph } from "../../style/General";

const LoaderComponent = () => {
    return (
        <Loader>
            <Paragraph>Loading...</Paragraph>
        </Loader>
    )
}
    

export default LoaderComponent

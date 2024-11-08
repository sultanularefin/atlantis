
import {
    ActivityIndicator,
} from "react-native";

import React from "react";

interface Indicator_Common_Props {
    color: string
}

const Indicator_Common: React.FC<
    Indicator_Common_Props
> = ({
    color,
})=>{


    return(

        <ActivityIndicator
            size="large"
            color={color}
        />
    );


};
export default Indicator_Common;

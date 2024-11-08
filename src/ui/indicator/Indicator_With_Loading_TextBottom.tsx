import {Text, View} from "react-native";
// import Indicator_Common_Without_Params from "./Indicator_Common";
import React from "react";
import Indicator_Common from "./Indicator_Common";
// import Indicator_Common from "./Indicator_Common";



interface Indicator_With_Loading_TextBottom_Props{
    device_width: number;
    device_height: number;
}


const Indicator_With_Loading_TextBottom: React.FC<
    Indicator_With_Loading_TextBottom_Props
> = ({
                                                  device_width,
                                                  device_height,
     }) => {


    return(


        <View
            style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    width: device_width,
                    flexDirection: 'column',
                }
            }>
            <Indicator_Common
                color={'dodgerblue'}

            />
            <Text
                style={{
                    alignSelf: 'center',
                    // fontWeight: 'bold',
                    color: 'dodgerblue',
                    fontSize: 16,
                }}>Loading...
            </Text>
        </View>

    );
};

export default Indicator_With_Loading_TextBottom;


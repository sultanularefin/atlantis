import React from "react";
import {
    Pressable,
    Text,
    View
} from "react-native";

import {ukbd_navy_blue, ukbd_red} from "../../ui_utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import {useAppDispatch} from "../../../lib/app/hooks";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";



interface Support_Comp_Props{
    comp_Height:number // COMPONENT HEIGHT NOT DISPLAY HEIGHT OF DEVICE
    t_Width: number,
    phone_Number: string,
    support_Email: string,


}



const Support_Comp: React.FC<Support_Comp_Props> = (
    {   comp_Height,
        t_Width,
        phone_Number,
        support_Email,
    }
) => {



    const dispatch = useAppDispatch();


    const abc =()=>{

        console.log("abc pressed");
    };


    const def =()=>{

        console.log("dispatch(def pressed)");
    };


    return(

        <View
            style={{
                flexDirection: 'column',

                borderColor: 'lightsteelblue',
                borderWidth: 1,

                justifyContent: 'center',
                // backgroundColor: 'gold',
                alignItems: 'flex-end',
                // flex: 2,
                width: t_Width/1.6,
                height: comp_Height,
                marginRight: 10,
                marginTop: 5,
                marginBottom: 8,


            }}

        >

            <View


                style={{
                    // ...styles.addButton,
                    // ...favorite_Button_Styles.wishButton,


                    // backgroundColor: pressed ?'brown':'transparent',
                    justifyContent: 'flex-end',
                    width: t_Width/3,//'80%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingRight: 6,
                    /*
                    backgroundColor: pressed
                        ? `${ukbd_navy_blue}`
                        : "transparent",

                        */

                }}
            >


                <FontAwesome5Icon
                    name="headset"
                    size={t_Width/15}
                    color={ukbd_navy_blue}
                    // color="green"
                    // color="ivory"
                    style={{paddingHorizontal: 4}}
                />



                <View

                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: comp_Height/3,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{
                        color: `${ukbd_navy_blue}`,
                        textAlign: 'right',
                    }}>
                        {phone_Number}
                    </Text>
                </View>


            </View>
            {/*80 % ends here*/}


            <View


                style={{
                    justifyContent: 'flex-end',
                    width: t_Width/1.6,//'80%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: comp_Height/3,
                    paddingRight: 6,
                }}>

                <Text style={{

                }}>or email</Text>
            </View>



            <View


                style={{
                    justifyContent: 'flex-end',
                    width: t_Width/1.6,//'80%'
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingRight: 6,
                    height: comp_Height/3,
                }}>

                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>{support_Email}</Text>
            </View>

        </View>

    );
};

export default Support_Comp;


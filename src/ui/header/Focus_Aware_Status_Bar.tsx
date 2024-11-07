import * as React from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {One_Reg_Page_Comp_Props} from "../components/identity/reg_Page/One_Reg_Page_Comp";
import {ukbd_navy_blue} from "../ui_Utils/important_Colors";
import {useState} from "react";

/*function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}*/


export interface Focus_Aware_Status_Bar_Props {
    barStyle: StatusBarStyle,//string,
    backgroundColor: string,

}


const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;
const Focus_Aware_Status_Bar: React.FC<Focus_Aware_Status_Bar_Props> = ({

                                                                            barStyle,
                                                                            backgroundColor,


                                                                        }) => {
// const Focus_Aware_Status_Bar = ()=>{

    const isFocused = useIsFocused();



    console.log("__isFocused__ at Focus_Aware_Status_Bar: ",isFocused);

    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
        STYLES[0],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<
        'fade' | 'slide' | 'none'
    >(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };





    return isFocused ? (

        <StatusBar
            animated={false}
            backgroundColor={backgroundColor}
            barStyle={statusBarStyle}
            showHideTransition={statusBarTransition}
            hidden={hidden}
        />
    ) : null;
};


export default Focus_Aware_Status_Bar;



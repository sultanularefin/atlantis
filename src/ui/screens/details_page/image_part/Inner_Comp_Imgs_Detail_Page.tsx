import React from "react";

import {Text} from "react-native";
import ONEImage from "./ONEImage";
export interface FeedImage_Props_For_Image_Display_and_Tag{


    oneItem_url: string,
    //date:string,
    idx:number,
    displayWidth:number,
    navigationProp: any,
    rootIndex: number,

    imgsOFThisFeed: string[],
    all_images: string[],
    content: string,



}

const Inner_Comp_Imgs_Detail_Page: React.FC<FeedImage_Props_For_Image_Display_and_Tag> = ({


                                                                                         oneItem_url,
                                                                                         //date,
                                                                                         idx,
                                                                                         displayWidth,
                                                                                         navigationProp,
                                                                                         rootIndex,
                                                                                         imgsOFThisFeed,
                                                                                         all_images,
                                                                                         content,

                                                                                     }) =>{


    /*
    console.log("oneItem_url",oneItem_url);
    console.log("date",date);
    console.log("idx",idx);
    console.log("displayWidth",displayWidth);
    // console.log("",navigationProp);
    console.log("rootIndex",rootIndex);
    console.log("imgsOFThisFeed",imgsOFThisFeed);
    console.log("content",content);
    console.log("poster",poster);
    console.log("feedI______d",feedId); //string,
    console.log("id_____",id); //string, // n
    console.log("loggerID",loggerID);
    console.log("postUserID",postUserID);

    */



    return (

        // <Text>more than 2</Text>
        <ONEImage
            oneItem_url= {oneItem_url}
            //date= {date}
            idx={idx}
            comp_Width_2={displayWidth}
            navigationProp={navigationProp}
            rootIndex={rootIndex}
            images_OFThis_Feed={imgsOFThisFeed}
            all_images_string={all_images}
            content={content}
        />
    );

};

export default Inner_Comp_Imgs_Detail_Page;

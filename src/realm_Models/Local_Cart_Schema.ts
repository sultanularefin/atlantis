import Realm from 'realm';


class Local_Cart_Schema extends Realm.Object {


    /*
    comment!: number;
    datetime!: Date;
    dislike!: number;
    feed_content!: string;
    feed_id!: number;//string;          //5



    feed_owner_id!: string;
    feed_owner_name!: string;
    feed_photos!: string;
    id!: number;//string;
    like!: number;                      // 10
    // Error: RealmOneFeed.like must be of type 'string', got 'number' (0)


    // feed_photos!: string[]; changed to below decemebr 11,2021:




    likeDislikeStatus!: number;
    lstcomment!:string;
    lstcomment_name!: string; // update on march 03_2022
    lstcomment_photo!: string;
    name!: string;                      // 15


    share!: number;//;string;
    status!: number;//string;
    time!: string;
    user_id!: string;
    user_profile_photo!: string;            // 20


    person_name?: "";
    person_pic?: "";

     */


    _id!: Realm.BSON.ObjectId;
    // _id!: Realm.BSON.ObjectId;

    name!: string;
    quantity!: number;
    price!: number;
    image!: string;
    id!: string;
    index!: number;
    weight!: number;

    /*

    export interface local_Cart_Item
{

    // name: Cadbury Bournville Dark Chocol;

    name: string,
    quantity: number,
    price: number,

    // price_Foreign_or_Delivery: number, // IMPORTANT


    image: string,
    id: string,
    index: number,
    weight: number,

};
     */

    static schema = {
        // name: 'RealmOneFeed',
        name: 'RealmOneCartItem',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',

            id: "string",//"string",  //_id!: "int",
            // dislike: "int",
            name: "string",
            quantity: "int",
            price: "float",//"int",
            image: "string",
            index: "int",
            weight: "float",//"int",


            /*
            _id: 'objectId',

            id: "int",//"string",  //_id!: "int",
            // comment: "string",
            comment: "int",  // changed from "string" to "int" //  Error: RealmOneFeed.comment must be of type 'string', got 'number' (0)
            // comment_person_profile!: string; // update on march 03_2022

            datetime: "string",
            dislike: "int", // Error: RealmOneFeed.dislike must be of type 'string', got 'number' (0)

            feed_content: "string",
            feed_id: "int",//"string?",
            feed_owner_id: "string?",
            feed_owner_name: "string?", //QUESTION MARK AT THE END MEANS OPTIONAL
            // feed_photos: string[];
            // feed_photos: "string[]",//"list[string]", //"string[]",  changed to below decemebr 11,2021:
            feed_photos: "string?",
            // id: "string",
            like: "int", // Error: RealmOneFeed.dislike must be of type 'string', got 'number' (0)
            likeDislikeStatus: "int",  // Error: RealmOneFeed.likeDislikeStatus must be of type 'string', got 'number' (0)
            lstcomment: {
                    "type": "string?",
                    "default": "null",
                },
            lstcomment_name:{
                "type": "string?",
                "default": "null",
            }, // update on march 03_2022
            lstcomment_photo:{
                "type": "string?",
                "default": "null",
            },
            name: "string",
            share: "int",//"string",
            status: "int",//"string",
            time: "string",
            user_id: "string",
            user_profile_photo: "string",
            */
        },
    };
}

export default Local_Cart_Schema;





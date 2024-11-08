


// import {GOOGLE_MAPS_API_KEY_1} from './constants2'; // REQUIRED FOR SERVER DEPLOYMENT


import {
    backend_port,
    backend_server,
    host_address
} from "../Config";
import {GOOGLE_MAPS_API_KEY_1} from "./constants2.ts";





// REQUIRED LOCALLY begins here




const GOOGLE_MAPS_API_KEY = GOOGLE_MAPS_API_KEY_1;


// REQUIRED LOCALLY ends here




// const GOOGLE_MAPS_API_KEY = GOOGLE_MAPS_API_KEY_1; // REQUIRED FOR SERVER DEPLOYMENT



const socket_URL= `ws://${host_address}:${backend_port}/`;
// const socket_URL=`${backend_server}`;


const test_Socket_URL= "ws://localhost:9013";
export {
    GOOGLE_MAPS_API_KEY,
    socket_URL,
    test_Socket_URL,
};





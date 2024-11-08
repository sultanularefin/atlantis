

const backend_port = 8015;

const backend_server ="https://backend.theae.uk/";// `https://backend.theae.uk/`;


const host_address = "127.0.0.1";//localhost;
// const host_address="149.102.152.123"; //server address;

// const baseURL = backend_server;//
const baseURL= `http://${host_address}:${backend_port}/`;

const is_use_aws_bucket= true;
const image_base_url= "https://ai2-call-a-cab.s3.us-east-2.amazonaws.com/";

// const icon_base
const appStatic = {
    country: "Bangladesh",
    address: "Dhaka, Bangladesh",
    city: "Dhaka District",
    latitude: 23.810332,
    longitude: 90.4125181,
};
// const store_Registration = 'https://store.ukbd.uk/store/register'
export {
    baseURL,
    appStatic,
    is_use_aws_bucket,
    image_base_url,
    backend_port,
    host_address,
    backend_server,


};

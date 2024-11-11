

const backend_port = 8015;

const backend_server ="https://fakestoreapi.com/";// `https://backend.theae.uk/`;


const host_address = "127.0.0.1";//localhost;

const baseURL= `http://${host_address}:${backend_port}/`;

const is_use_aws_bucket= true;

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
    backend_server,
    backend_port,
    host_address,



};

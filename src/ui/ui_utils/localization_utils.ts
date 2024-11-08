const ConversionRate = {
    "DollarToTaka": "84.89",
    "DollarToEuro": "0.92",
    "EuroToDollar": "1.08",
    "DollarToYen": "109.79",
};

export interface monetary_Unit_Interface {
    index: number,//0,
    name: string,//"Dollar",
    unicode: string,//"\u0024"
    Currency_Code: string,
    text: string,

}

const MonetaryUnits: monetary_Unit_Interface[] = [
    {
        index: 0,
        name: "Dollar",
        unicode: "\u0024",
        Currency_Code: "USD",
        text: 'ট',
    },
    {
        index: 1,
        name: "Euro",
        unicode: "\u20AC",
        Currency_Code: "EUR",
        text: 'ট',

    },
    {
        index: 2,
        name: "Yen",
        unicode: "\u00A5",
        Currency_Code: "JPY",
        text: 'ট',
    },
    {
        index: 3,
        name: "Taka",
        unicode: "\u09F3",
        Currency_Code: "BDT",
        text: 'ট',
    },
    {
        index: 4,
        name: "Pound",
        unicode: "\u00A3",
        Currency_Code: "GBP",
        text: '£',

    }
];


const convert_TO_BDT_From_GBP = (view_Value: number, currency: string, rate: number) => {


    const cv = Number(view_Value * rate);
    if (Number.isInteger(cv)) {
        return (cv);
    } else {
        return Math.round(cv);
        // return parseFloat(String(cv)).toFixed(2);
        // return parseFloat(String(cv)).toFixed(2);
        // return parseFloat(String(cv)).toFixed(2);
    }

};


// price convert to alternative currency from given currency
const priceConvertToAlternate = (view_Value: number, currency: string, rate: number) => {

    // console.log("view_Value: ",view_Value);
    // console.log("currency: ",currency);
    // console.log("rate: ",rate);


    //
    if (currency === 'BDT') {
        const cv = Number(view_Value * rate);
        if (Number.isInteger(cv)) {
            return String(cv);
        } else {

            return Math.round(cv);


        }
    } else if (currency === 'GBP') {
        // return Math.round(cv);
        const cv = Number(view_Value * rate);
        if (Number.isInteger(cv)) {
            return String(cv);
        } else {
            return parseFloat(String(cv)).toFixed(2);
            // return parseFloat(String(cv)).toFixed(2);
        }


    } else {
        // logic needs to checked for other currencies added on mac april 11, 2023
        const cv = Number(view_Value * rate);
        if (Number.isInteger(cv)) {
            return cv;
        } else {
            return parseFloat(String(cv)).toFixed(2);
        }

    }

};


// const previousPrice(props.data.view_price, Number(props.data.offer_percentage))}

const previousPrice = (price:number, offer: number) => {
    if (offer === 10) {
        return Number(price / 0.9).toFixed(2);
    }
    else if (offer === 20) {
        return Number(price / 0.8).toFixed(2);
    }
    else if (offer === 30) {
        return Number(price / 0.7).toFixed(2);
    }
    else if (offer === 50) {
        return Number(price / 0.5).toFixed(2);
    }
    else {
        return String(price);
    }

};


/*const previousPrice = (view_price: number, offer: number) => {
    if (offer === 10) {
        return Math.round(Number(view_price / 0.9));
    } else if (offer === 20) {
        return Math.round(Number(view_price / 0.8));
    } else if (offer === 30) {
        return Math.round(Number(view_price / 0.7));
    } else if (offer === 50) {
        return Math.round(Number(view_price / 0.5));
    } else if (offer === 0) {
        return Math.round(Number(view_price));
    } else {
        return Math.round(Number(view_price));
    }

};*/


export {
    MonetaryUnits,
    ConversionRate,
    priceConvertToAlternate,
    previousPrice,
    convert_TO_BDT_From_GBP,
};





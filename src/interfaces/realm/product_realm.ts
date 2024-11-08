import {local_Cart_Item} from "../products/product.ts";


interface realm_Cart_Item extends local_Cart_Item {
    _id: string,
}

export type {
    realm_Cart_Item
};


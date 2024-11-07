

interface One_Product_Interface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: product_Rating_Interface
}

interface product_Rating_Interface {
    rate: number
    count: number
}

export type {
    One_Product_Interface,
    product_Rating_Interface,
}


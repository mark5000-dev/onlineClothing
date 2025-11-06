export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    isNew?: boolean;
    isBestseller?: boolean;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    itemCount: number;
}
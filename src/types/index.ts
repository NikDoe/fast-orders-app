//Cart
export type TCartItem = {
    pizzaId: string;
    name: string; 
    quantity: number;
    totalPrice: number;
}

//Pizza
export type TPizza = {
    id: string;
    name: string;
    unitPrice: number;
    ingredients: [];
    soldOut: boolean;
    imageUrl: string;
}

//Order
export type TOrderItem = {
    quantity: number;
    name: string;
    totalPrice: number;
}
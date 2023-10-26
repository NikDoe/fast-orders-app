//Cart
export type TCartItem = {
    pizzaId: number;
    name: string; 
    quantity: number;
    totalPrice: number;
    unitPrice: number;
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
export type TOrder = {
    cart: TCartItem[];
    customer: string;
    estimatedDelivery: string;
    id: string;
    orderPrice: number;
    priority: boolean;
    priorityPrice: number;
    status: string;
}

export type TOrderItem = {
    quantity: number;
    name: string;
    totalPrice: number;
}

export type TFormData = {
    address: string;
    customer: string;
    phone: string;
    priority: string;
    cart: string;
}
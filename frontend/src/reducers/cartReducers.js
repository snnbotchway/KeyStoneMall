import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

export const cardReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemExists = state.cartItems.find(
                i => i.id === action.payload.id
            );
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id ? action.payload : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.filter(
                        item => item.id !== action.payload
                    ),
                ],
            };
        default:
            return state;
    }
};

import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            id: data._id,
            name: data.name,
            countInStock: data.countInStock,
            image: data.image,
            qty,
            price: data.price,
        },
    });
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartScreenInfo.cartItems)
    );
};

export const removeFromCart = id => (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartScreenInfo.cartItems)
    );
};

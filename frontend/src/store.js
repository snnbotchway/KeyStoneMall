import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
    productListReducer,
    productDetailReducer,
} from "./reducers/productReducers";
import { cardReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
    homeScreenInfo: productListReducer,
    productScreenInfo: productDetailReducer,
    cartScreenInfo: cardReducer,
});

const localStorageCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
    cartScreenInfo: { cartItems: localStorageCartItems },
};

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
});

export default store;

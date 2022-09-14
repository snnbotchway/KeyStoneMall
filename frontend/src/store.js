import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
    productListReducer,
    productDetailReducer,
} from "./reducers/productReducers";
import { cardReducer } from "./reducers/cartReducers";
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
    homeScreenInfo: productListReducer,
    productScreenInfo: productDetailReducer,
    cartScreenInfo: cardReducer,
    loginScreenInfo: userLoginReducer,
    registerScreenInfo: userRegisterReducer,
    updateScreenInfo: userUpdateReducer,
});

const localStorageCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : null;

const localStorageUserInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    cartScreenInfo: { cartItems: localStorageCartItems },
    loginScreenInfo: { userInfo: localStorageUserInfo },
};

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
});

export default store;

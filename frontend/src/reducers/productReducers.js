import {
    GET_PRODUCT_LIST,
    GOT_PRODUCT_LIST,
    FAILED_PRODUCT_LIST,
    GET_PRODUCT_DETAIL,
    GOT_PRODUCT_DETAIL,
    FAILED_PRODUCT_DETAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                loading: true,
                products: [],
            };
        case GOT_PRODUCT_LIST:
            return {
                loading: false,
                products: action.payload,
            };
        case FAILED_PRODUCT_LIST:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productDetailReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                loading: true,
                product: [],
            };
        case GOT_PRODUCT_DETAIL:
            return {
                loading: false,
                product: action.payload,
            };
        case FAILED_PRODUCT_DETAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

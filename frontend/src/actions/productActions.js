import {
    GET_PRODUCT_LIST,
    GOT_PRODUCT_LIST,
    FAILED_PRODUCT_LIST,
    GET_PRODUCT_DETAIL,
    GOT_PRODUCT_DETAIL,
    FAILED_PRODUCT_DETAIL,
} from "../constants/productConstants";
import axios from "axios";

export const getProductDetail = id => async dispatch => {
    try {
        dispatch({ type: GET_PRODUCT_DETAIL });
        const { data } = await axios.get(`/api/products/${id}`);
        console.log("got data from django");
        dispatch({ type: GOT_PRODUCT_DETAIL, payload: data });
    } catch (error) {
        dispatch({
            type: FAILED_PRODUCT_DETAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response
                    : error.message,
        });
    }
};

export const listProducts = () => async dispatch => {
    try {
        dispatch({ type: GET_PRODUCT_LIST });
        const { data } = await axios.get("/api/products/");
        console.log("got data from django");
        dispatch({ type: GOT_PRODUCT_LIST, payload: data });
    } catch (error) {
        dispatch({
            type: FAILED_PRODUCT_LIST,
            payload:
                error.response && error.response.data.message
                    ? error.response
                    : error.message,
        });
    }
};

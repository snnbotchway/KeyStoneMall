import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
            };
        case LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                loading: true,
            };
        case REGISTER_SUCCESS:
            return {
                loading: false,
            };
        case REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_REQUEST:
            return {
                loading: true,
            };
        case UPDATE_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
            };
        case UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

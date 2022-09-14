import axios from "axios";
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

export const userLogin = (email, password) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.post(
            "/api/users/login/",
            { "username": email, "password": password },
            config
        );

        dispatch({ type: LOGIN_SUCCESS, payload: data });

        localStorage.setItem(
            "userInfo",
            JSON.stringify(getState().loginScreenInfo.userInfo)
        );
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const userLogout = () => dispatch => {
    localStorage.removeItem("userInfo");
    dispatch({ type: LOGOUT });
};

export const userRegister = (
    firstName,
    lastName,
    email,
    password
) => async dispatch => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        await axios.post(
            "/api/users/register/",
            {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "password": password,
            },
            config
        );

        dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const userUpdate = (firstName, lastName, email, password) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: UPDATE_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${
                    getState().loginScreenInfo.userInfo.token
                }`,
            },
        };
        const { data } = await axios.put(
            "/api/users/profile/update/",
            {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "password": password,
            },
            config
        );

        dispatch({ type: UPDATE_SUCCESS, payload: data });

        dispatch({ type: LOGIN_SUCCESS, payload: data });

        localStorage.setItem(
            "userInfo",
            JSON.stringify(getState().updateScreenInfo.userInfo)
        );
    } catch (error) {
        dispatch({
            type: UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

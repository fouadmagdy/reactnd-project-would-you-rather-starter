import { QUESTION_LIST_RESET } from '../constants/questionConstants'
import { USER_LIST_REQUEST, USER_LIST_FAIL, USER_LIST_RESET, USER_LIST_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/userConstants'

import {
    _getUsers,
} from '../_DATA'



export const login = (data) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGOUT,
        })

        dispatch({
            type: USER_LIST_RESET,
        })

        dispatch({
            type: QUESTION_LIST_RESET,
        })

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        })
    }
}

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        })

        var users = {}

        users.getUsers = function () {
            var promise = new Promise(function (resolve, reject) {
                resolve(_getUsers());
            });
            return promise;
        };

        users.getUsers().then(function (data) {
            dispatch({
                type: USER_LIST_SUCCESS,
                payload: data,
            })
        });



    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error
        })
    }
}
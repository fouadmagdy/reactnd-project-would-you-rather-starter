import { USER_LIST_REQUEST, USER_LIST_FAIL, USER_LIST_RESET, USER_LIST_SUCCESS } from '../constants/userConstants'

import {
    _getUsers,
} from '../_DATA'

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
            console.log('data', data)
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
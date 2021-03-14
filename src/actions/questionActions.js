import { QUESTION_LIST_REQUEST, QUESTION_LIST_FAIL, QUESTION_LIST_RESET, QUESTION_LIST_SUCCESS } from '../constants/questionConstants'

import {
    _getQuestions,
} from '../_DATA'

export const listQuestions = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUESTION_LIST_REQUEST,
        })

        var questions = {}

        questions.getQuestions = function () {
            var promise = new Promise(function (resolve, reject) {
                resolve(_getQuestions());
            });
            return promise;
        };

        questions.getQuestions().then(function (data) {
            dispatch({
                type: QUESTION_LIST_SUCCESS,
                payload: data,
            })
        });



    } catch (error) {
        dispatch({
            type: QUESTION_LIST_FAIL,
            payload: error
        })
    }
}
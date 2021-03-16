import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_FAIL,
    QUESTION_LIST_SUCCESS,
    QUESTION_ANSWERED_REQUEST,
    QUESTION_ANSWERED_SUCCESS,
    QUESTION_ANSWERED_FAIL,
    SAVE_QUESTION_REQUEST,
    SAVE_QUESTION_SUCCESS,
    SAVE_QUESTION_FAIL,
    NEW_QUESTION_REQUEST,
    NEW_QUESTION_SUCCESS,
    NEW_QUESTION_FAIL
} from '../constants/questionConstants'

import {
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
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


export const questionAnswered = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUESTION_ANSWERED_REQUEST,
        })


        dispatch({
            type: QUESTION_ANSWERED_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: QUESTION_ANSWERED_FAIL,
            payload: error
        })
    }
}


export const saveQuestions = (authedUser, qid, answer) => async (dispatch, getState) => {
    console.log('authedUser, qid, answer', authedUser, qid, answer)
    const info = {
        authedUser: authedUser,
        qid,
        answer
    };
    try {
        dispatch({
            type: SAVE_QUESTION_REQUEST,
        })

        var questions = {}

        questions.saveQuestionsAnswer = function () {
            var promise = new Promise(function (resolve, reject) {
                resolve(_saveQuestionAnswer(info));
            });
            return promise;
        };

        questions.saveQuestionsAnswer().then(function (data) {
            dispatch({
                type: SAVE_QUESTION_SUCCESS,
                payload: data,
            })
        });



    } catch (error) {
        dispatch({
            type: SAVE_QUESTION_FAIL,
            payload: error
        })
    }
}


export const newQuestions = (author, optionOneText, optionTwoText) => async (dispatch, getState) => {
    const info = {
        author,
        optionOneText,
        optionTwoText
    };
    try {
        dispatch({
            type: NEW_QUESTION_REQUEST,
        })

        var questions = {}

        questions.saveQuestions = function () {
            var promise = new Promise(function (resolve, reject) {
                resolve(_saveQuestion(info));
            });
            return promise;
        };

        questions.saveQuestions().then(function (data) {
            dispatch({
                type: NEW_QUESTION_SUCCESS,
                payload: data,
            })
        });



    } catch (error) {
        dispatch({
            type: NEW_QUESTION_FAIL,
            payload: error
        })
    }
}
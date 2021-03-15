import { QUESTION_LIST_REQUEST, QUESTION_LIST_FAIL, QUESTION_LIST_SUCCESS, QUESTION_ANSWERED_REQUEST, QUESTION_ANSWERED_SUCCESS, QUESTION_ANSWERED_FAIL, QUESTION_LIST_RESET, SAVE_QUESTION_REQUEST, SAVE_QUESTION_SUCCESS, SAVE_QUESTION_FAIL } from '../constants/questionConstants'



export const questionListReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
        case QUESTION_LIST_REQUEST:
            return { loading: true }
        case QUESTION_LIST_SUCCESS:
            return { loading: false, questions: action.payload }
        case QUESTION_LIST_FAIL:
            return { loading: false, error: action.payload }
        case QUESTION_LIST_RESET:
            return { questions: [] }
        default:
            return state
    }
}


export const questionAnsweredReducer = (state = { answeres: [] }, action) => {
    switch (action.type) {
        case QUESTION_ANSWERED_REQUEST:
            return { loading: true }
        case QUESTION_ANSWERED_SUCCESS:
            return { loading: false, answeres: action.payload }
        case QUESTION_ANSWERED_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const saveQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_QUESTION_REQUEST:
            return { loading: true }
        case SAVE_QUESTION_SUCCESS:
            return { loading: false }
        case SAVE_QUESTION_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
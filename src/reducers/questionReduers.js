import { QUESTION_LIST_REQUEST, QUESTION_LIST_FAIL, QUESTION_LIST_SUCCESS, QUESTION_LIST_RESET, QUESTION_ANSWERED_REQUEST, QUESTION_ANSWERED_SUCCESS, QUESTION_ANSWERED_FAIL } from '../constants/questionConstants'



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
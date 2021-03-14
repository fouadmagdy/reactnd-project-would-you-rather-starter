import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userListReducer, userLoginReducer } from './reducers/userReducers'
import { questionListReducer } from './reducers/questionReduers'

const reducer = combineReducers({
    userList: userListReducer,
    questionList: questionListReducer,
    userLogin: userLoginReducer,
})


const initialState = {}



const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
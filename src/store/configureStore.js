import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

import { AppReducer } from '../reducers/appReducer'

const applicationReducers = combineReducers({
    AppReducer
})

const initialState = {};
const store = createStore(applicationReducers, initialState, applyMiddleware(thunk))

export default store
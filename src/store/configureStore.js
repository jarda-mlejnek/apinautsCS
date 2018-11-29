import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

import { appReducer } from '../reducers/appReducer'

const applicationReducers = combineReducers({
    appReducer
})

const initialState = {};
const store = createStore(applicationReducers, initialState, applyMiddleware(thunk))

export default store
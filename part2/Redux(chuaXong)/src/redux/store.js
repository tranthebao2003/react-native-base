import {legacy_createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = [thunk]
export const store = legacy_createStore(
    reducer
)
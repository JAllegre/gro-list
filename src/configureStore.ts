import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore(/*preloadedState*/) {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}
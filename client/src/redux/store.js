import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './rootreducer'

const configureStore = () => {
    return createStore(
        rootReducer, applyMiddleware(thunk),
    )
}

export default configureStore
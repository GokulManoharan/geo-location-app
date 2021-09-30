import { combineReducers } from 'redux';
import loginReducer from './login/reducer';

const appReducer = combineReducers({
    loginData: loginReducer
})

const rootReducer = (state, action) => {
    if(action.type === "LOGOUT_USER"){
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer
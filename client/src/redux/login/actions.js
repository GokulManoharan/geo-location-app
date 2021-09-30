import axios from '../../config/config';
import * as types from './types';

// import { logOutCustomer } from '../../utils/helpers/auth';

export const loginSuccessAction = () => {
    return ({
        type: types.LOGIN_SUCCESS
    })
}

export const loginFailureAction = data => {
    return ({
        type: types.LOGIN_ERROR,
        payload: data
    })
}

export const loginLoading = _ => {
    return ({
        type: types.LOGIN_LOADING
    })
}

export const logoutAction = _ => {
    return ({
        type: types.LOGOUT_USER
    })
}

export const initiateLogin = (payload) => {
    return (dispatch) => {
        dispatch(loginLoading())
        axios.post('/auth/login', payload)
            .then(response => {
                if(response.headers['x-auth']){
                    const tokenData = {
                        token : response.headers['x-auth']
                    }
                    localStorage.setItem('loginData', JSON.stringify(tokenData));
                    dispatch(loginSuccessAction());
                }else{
                    dispatch(loginFailureAction(response?.data))
                }
            })
            .catch(err => {
                dispatch(loginFailureAction(err))
            })
    }
}
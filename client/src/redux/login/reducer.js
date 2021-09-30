import * as types from './types';

const loginInitialData = {
    token: '',
    isAuthenticated: false,
    loading: false,
    error: ''
}

const loginReducer = (state = loginInitialData, action) => {
    switch (action.type) {
        case types.LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        }
        case types.LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action?.payload?.error || ''
            };
        }
        case types.LOGOUT_USER: {
            return {
                ...state,
                isAuthenticated: false,
                token: '',
                loading: false
            };
        }
        default: {
            return state;
        }
    }
}

export default loginReducer
import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL } from './actions'

const initState = {
    isAuth: false,
    isLoading: true,
    userData: {}
};

export function AuthReducer(state = initState, action) {

    switch (action.type) {
        case AUTHORIZATION_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                userData: action.payload
            };
        case AUTHORIZATION_FAIL:
            return  {
                ...state,
                isLoading: false
            }
    }

    return state;
}
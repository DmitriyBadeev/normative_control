import { AUTHORIZATION_SUCCESS } from './actions'

const initState = {
    isAuth: false,
    userData: {}
};

export default function AuthReducer(state = initState, action) {

    switch (action.type) {
        case AUTHORIZATION_SUCCESS:
            return {
                ...state,
                isAuth: true,
                userData: action.payload
            };
    }

    return state;
}
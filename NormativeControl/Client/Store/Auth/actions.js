export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';

export function authSuccess(userData) {
    return {
        type: AUTHORIZATION_SUCCESS,
        payload: userData
    }
}


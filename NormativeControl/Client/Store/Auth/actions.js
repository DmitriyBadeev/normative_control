export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL';

export function authSuccess(userData) {
    return {
        type: AUTHORIZATION_SUCCESS,
        payload: userData
    }
}

export function authFail() {
    return {
        type: AUTHORIZATION_FAIL
    }
}


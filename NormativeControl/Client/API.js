import axios from 'axios';
import {PATH, REGISTRATION_URL, TOKEN_URL, USER_DATA_URL} from "./Config";

export function GetUserData() {
    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    };

    return axios.get(PATH+USER_DATA_URL, config)
}

export function GetToken(login, password) {
    const config = {
        params: {
            "login": login,
            "password": password
        }
    };

    return  axios.get(PATH+TOKEN_URL, config)
}

export function Registration(name, lastName, email, password, group, role) {

    const data = {
        Name: name,
        LastName: lastName,
        Email: email,
        Password: password,
        Group: group,
        Role: role
    };

    return axios.post(PATH+REGISTRATION_URL, data)
}
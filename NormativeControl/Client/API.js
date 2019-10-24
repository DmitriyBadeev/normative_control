import axios from 'axios';
import * as Config from "./Config";


export function GetUserData() {
    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    };

    return axios.get(Config.PATH + Config.USER_DATA_URL, config)
}

export function GetToken(login, password) {
    const config = {
        params: {
            "login": login,
            "password": password
        }
    };

    return  axios.get(Config.PATH + Config.TOKEN_URL, config)
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

    return axios.post(Config.PATH + Config.REGISTRATION_URL, data)
}

export function UploadTempFile(file) {

    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    };

    const formData = new FormData();
    formData.append("Work", file);

    return axios.post(Config.PATH + Config.UPLOAD_TEMP_FILE_URL, formData, config);
}

export function GetErrors() {
    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    };

    return axios.get(Config.PATH + Config.GET_ERRORS, config);
}
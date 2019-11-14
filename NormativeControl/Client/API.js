import axios from 'axios';
import * as Config from "./Config";

const AuthConfig = {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
};

export function GetUserData() {

    return axios.get(Config.PATH + Config.USER_DATA_URL, AuthConfig)
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

    const formData = new FormData();
    formData.append("Work", file);

    return axios.post(Config.PATH + Config.UPLOAD_TEMP_FILE_URL, formData, AuthConfig);
}

export function GetErrors() {

    return axios.get(Config.PATH + Config.GET_ERRORS, AuthConfig);
}

export function SendWork(file, template, isEmail) {

    const formData = new FormData();
    formData.append("File", file);
    formData.append("Template", template);
    formData.append("IsEmailNotification", isEmail);

    return axios.post(Config.PATH + Config.SEND_WORK, formData, AuthConfig)
}

export function GetWorks() {

    return axios.get(Config.PATH + Config.GET_WORKS, AuthConfig);
}

export function DeleteWork(id) {
    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        params: {
            "idWork": id
        }
    };

    return axios.delete(Config.PATH + Config.DELETE_WORK, config)
}

export function GetAllWorks() {

    return axios.get(Config.PATH + Config.GET_ALL_WORKS, AuthConfig);
}

export function PutErrors(workId, errors) {

    const data = {
        errors,
        workId
    };

    return axios.put(Config.PATH + Config.PUT_ERRORS, data, AuthConfig)
}

export function UploadFile(file, workId, status) {

    const formData = new FormData();
    formData.append("File", file);
    formData.append("WorkId", workId);
    formData.append("Status", status);

    return axios.post(Config.PATH + Config.UPLOAD_WORK_FILE, formData, AuthConfig);
}

export function AcceptWork(id) {

    return axios.post(Config.PATH + Config.ACCEPT_WORK(id), {}, AuthConfig)
}






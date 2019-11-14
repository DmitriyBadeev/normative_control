
export const PATH = 'https://localhost:44381/api/';

export const TOKEN_URL = 'auth/token';

export const USER_DATA_URL = 'auth/user';

export const REGISTRATION_URL = 'registration';

export const UPLOAD_TEMP_FILE_URL = 'upload-temp-file';

export const GET_ERRORS = 'errors';

export const SEND_WORK = 'send';

export const GET_WORKS = 'works';

export const DELETE_WORK = 'work';

export const GET_ALL_WORKS = 'all-works';

export const PUT_ERRORS = 'put-error';

export const UPLOAD_WORK_FILE = 'upload-file-work';

export const ACCEPT_WORK = (id) => `accept-work/${id}`;

export const STATUS = {
    CHECK: "Проверка нормоконтролером",
    PENDING_CORRECTION: "Ожидание исправления",
    PENDING_RECHECK: "Ожидание перепроверки",
    ACCEPTED: "Работа принята"
};

export const ROLE = {
    STUDENT: "Студент",
    NORMCONTROL: "Нормоконтролер"
};
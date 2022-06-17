import axios from 'axios';

export class Api {
    static call = axios.create({
        baseURL: (process.env.BASE_API_URL || 'localhost') + '/api',
    });
}

export class AdminApi {
    static login(data) {
        return Api.call('/admin/login', {
            data,
            method: 'POST',
        });
    }
}
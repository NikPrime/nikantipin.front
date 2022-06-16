import axios from 'axios';

export class Api {
    static call = axios.create({
        responseType: 'json',
        //временно
        baseURL: (process.env.BASE_URL || 'http://80.78.251.27:3000') + '/api',
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
import axios from 'axios';

export class Api {
    static call = axios.create({
        //temporary solution
        baseURL: (process.env.BASE_API_URL || 'http://80.78.251.27:3000') + '/api',
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
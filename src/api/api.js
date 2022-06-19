import axios from 'axios';

export class Api {
    static call = axios.create({
        //temporary solution
        baseURL: (process.env.BASE_API_URL || 'https://nikantipin.site') + '/api',
    });
}

export class AdminApi {
    static login(data) {
        return Api.call('/admin/login', {
            data,
            method: 'POST',
        });
    }

    static saveArticle(data) {
        return Api.call('/articles', {
            data,
            method: 'POST',
            headers: {
                "x-access-token": localStorage.getItem('x-access-token')
            }
        });
    }

    static checkAuth() {
        return Api.call('/admin/auth', {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.getItem('x-access-token')
            }
        })
    }
}
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
        const token = localStorage.getItem('x-access-token');

        return Api.call('/articles', {
            data,
            method: 'POST',
            headers: {
                "x-access-token": token
            }
        });
    }

    static checkAuth() {
        const token = localStorage.getItem('x-access-token');

        return Api.call('/admin/auth', {
            method: 'GET',
            headers: {
                "x-access-token": token
            }
        });
    }
}

export class BaseApi {
    static getArticle(id) {
        return Api.call(`/articles/${id}`, {
            method: 'GET',
        });
    }
    static getArticles(params) {
        return Api.call('/articles', {
            method: 'GET',
            params
        });
    }
}
const request = require('supertest');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ 'path': path.join(path.resolve(__dirname, '../..'), '.env.test') });

const app = require('../koa');
const apiServer = app.listen(process.env.PORT);
const db = require('../utils/db');

async function callApi(method, path, params = {}) {
    method = method.toLowerCase();

    if (method === 'get') {
        const res = await request(apiServer)
            .get(path)
            .query(params)
            .set('Accept', 'application/json');
        return res;
    }

    if (method === 'post') {
        const res = await request(apiServer)
            .post(path)
            .send(params)
            .set('Accept', 'application/json');
        return res;
    }

    if (method === 'postfile') {
        const res = await request(apiServer)
            .post(path)
            .attach('file', params.file)
            .set('Accept', 'multipart/form-data');
        return res;
    }
}

module.exports = {
    db,
    callApi,
};
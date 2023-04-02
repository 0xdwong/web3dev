const { expect } = require('chai');
const { callApi } = require('../testUtils');
const { RESP } = require('../../consts');


describe('api-app', () => {
    describe('GET /app/ping', () => {
        const PATH = '/app/ping';
        let param = {};

        it('should return succeed', async () => {
            const res = await callApi('get', PATH, param);

            expect(res.status).to.equal(200);
        });
    });

    describe('GET /app/get', () => {
        const PATH = '/app/get';
        let param = {};

        it('should return succeed', async () => {
            const res = await callApi('get', PATH, param);

            expect(res.status).to.equal(200);
            expect(res.body.code).to.equal(RESP['STATUS']['SUCCEED']);
            expect(res.body.msg).to.equal(RESP['DEFAULT_SUCCEED_MSG']);
        });
    });

    describe('POST /app/post', () => {
        const PATH = '/app/post';
        let param = {};

        it('should return succeed', async () => {
            const res = await callApi('post', PATH, param);

            expect(res.status).to.equal(200);
            expect(res.body.code).to.equal(RESP['STATUS']['SUCCEED']);
            expect(res.body.msg).to.equal(RESP['DEFAULT_SUCCEED_MSG']);
        });
    });
});
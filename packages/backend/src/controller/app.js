const { succeed, fail } = require('./base');
const app = require('../service/app');

async function ping(ctx) {
    return ctx.response.status = 200;
}

async function testGet(ctx) {
    let queryData = ctx.request.query;

    let data = app.testGet(queryData);

    if (data) {
        return succeed(ctx, data);
    } else {
        return fail(ctx, 'something wrong');
    }
}


async function testPost(ctx) {
    let body = ctx.request.body;

    let bool = app.testPost(body);

    if (bool) {
        return succeed(ctx);
    } else {
        return fail(ctx, 'something wrong');
    }
}


module.exports = {
    ping,
    testGet,
    testPost,
};
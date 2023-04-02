const { RESP } = require('../consts');

function fail(ctx, msg, code, data) {
    if (code === undefined) code = RESP['STATUS']['FAILED'];
    let body = { 'code': code, 'msg': msg };
    if (data) body.data = data;
    ctx.response.body = body;
}

function succeed(ctx, data, msg, code) {
    if (msg === undefined) msg = RESP['DEFAULT_SUCCEED_MSG'];
    if (code === undefined) code = RESP['STATUS']['SUCCEED'];
    let body = { 'code': code, 'msg': msg };
    if (data) body.data;
    ctx.response.body = body;
}

module.exports = {
    fail,
    succeed,
};
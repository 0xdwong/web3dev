const app = require('./controller/app');


module.exports = [
    ['get', '/app/ping', app.ping],
    ['get', '/app/get', app.testGet],
    ['post', '/app/post', app.testPost],
];
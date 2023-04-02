const dotenv = require('dotenv');
const path = require('path');
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ 'path': path.join(path.resolve(__dirname, '..'), envFile) });
const logger = require('./utils/logger');
const app = require('./koa');


process.on('uncaughtException', (err, origin) => {
    logger.error(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

function run() {
    // 启动http
    app.listen(process.env.PORT);
    logger.info(`App listening on ${process.env.PORT}`);
}

run();

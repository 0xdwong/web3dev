const dotenv = require('dotenv');
const path = require('path');
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ 'path': path.join(path.resolve(process.cwd(), '.'), envFile) });
const logger = require('./logger');
const jobMgr = require('./jobMgr');


process.on('uncaughtException', (err, origin) => {
    logger.error(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

function run() {
    jobMgr.loadJobs().start();
}

run();

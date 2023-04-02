const path = require('path');
const Job = require('./jobs/job');
const jobs = require('../jobs.json');
const logger = require('./logger');


class JobMgr {
    constructor() {
        this.jobs = [];
    }

    loadJobs() {
        for (let name in jobs) {
            let { handler, cron, enabled } = jobs[name];
            if (enabled) this.addJob(name, cron, handler);
        }
        return this;
    }

    addJob(name, cron, handler) {
        let fn;
        try {
            fn = require(path.join(process.cwd(), handler));
        } catch (err) {
            logger.error(`job handler[${handler}] not exist`);
            return 0;
        }

        let job = new Job(name, cron, fn);
        this.jobs.push(job);

        logger.debug(`add job[${name}]`);

        return 1;
    }

    start() {
        for (let job of this.jobs) {
            job.start();
        }

        setInterval(() => {
            // 防止进程退出
            logger.debug(`[${this.jobs.length}] jobs are nunning`);
        }, 3000);

        return this;
    }
}

module.exports = new JobMgr();
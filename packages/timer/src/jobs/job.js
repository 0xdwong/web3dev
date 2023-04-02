const schedule = require('node-schedule');
const logger = require('../logger');
const cache = require('../utils/cache');


class Job {
    constructor(name, cron, handler) {
        this.name = name;
        this.cron = cron;
        this.handler = handler;
        this.isLocked = false;
        this.lockKey = `iusd-lock-${this.name}`;
        this.lock();
    }

    lock() {
        cache.set(this.lockKey, true, 'EX', 120); // 120 second
        this.isLocked = true;
    }

    unlock() {
        cache.set(this.lockKey, false);
        this.isLocked = false;
    }

    async start(data = {}) {
        // unlock
        this.unlock();
        
        schedule.scheduleJob(this.cron, async () => {
            await this.run(data);
        });

        logger.debug(`start job[${this.name}]`, JSON.stringify(data));
    }

    async run(data) {
        if (!await this._beforeRun()) return;

        this.lock();

        logger.debug(`job[${this.name}] is running`);

        try {
            await this.handler(data);
        } catch (err) {
            logger.error(`job[${this.name}] handler failed`, err);
        }

        await this.unlock();
    }

    async _beforeRun() {
        let val = await cache.get(this.lockKey);
        if (val === 'true') return;

        if (await this._isTimerStop()) {
            logger.debug('Timer is Stopped');
            return;
        }

        return true;
    }

    async _isTimerStop() {
        return false;
    }
}


module.exports = Job;
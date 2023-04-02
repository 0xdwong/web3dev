const NodeCache = require('node-cache');


class Cache {
    constructor() {
        this.type = 'memory';
        this.cache = new NodeCache();
    }

    async set(key, value, ttl) {
        return this.cache.set(key, value, ttl);
    }

    async get(key) {
        return this.cache.get(key);
    }

    async mget(keys) {
        return this.cache.mget(keys);
    }

    async del(key) {
        return this.cache.del(key);
    }

    async list() {
        return this.cache.keys();
    }
}

module.exports = Cache;
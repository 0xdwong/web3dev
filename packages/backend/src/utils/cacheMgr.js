const NodeCache = require('./nodeCache');


class CacheMgr {
    constructor() {
        this.caches = {};
    }

    getCaches(){
        return this.caches;
    }

    getCache(type = 'memory') {
        if (this.caches[type]) return this.caches[type];

        let cache = null;
        switch (type) {
            case 'memory':
                cache = new NodeCache();
                break;
            default:
                break;
        }

        this.caches[type] = cache;
        return cache;
    }
}


const cacheMgr = new CacheMgr();
module.exports = cacheMgr;
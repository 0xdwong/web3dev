const { expect } = require('chai');
const cacheMgr = require('../../utils/cacheMgr');


describe('cacheMgr', () => {

    describe('getCaches', () => {
        it('should return empty', async () => {
            let caches = cacheMgr.getCaches();
            expect(caches).to.eql({});
        });

        it('should return caches', async () => {
            cacheMgr.getCache('memory');

            let caches = cacheMgr.getCaches();
            expect(Object.keys(caches).length).to.equal(1);
        });
    });

    describe('getCache', () => {
        it('should return cache', async () => {
            let cache = cacheMgr.getCache('memory');
            expect(cache).to.be.not.null;
            expect(cache.type).to.equal('memory');
        });
    });
});
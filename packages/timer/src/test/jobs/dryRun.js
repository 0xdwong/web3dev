const { expect } = require('chai');
const testUtils = require('../testUtils');
const dryRun = require('../../jobs/dryRun');


describe('dryRun', () => {
    it('should return 1', async () => {
        const result = await dryRun();
        expect(result).to.equal(1);
    });
});
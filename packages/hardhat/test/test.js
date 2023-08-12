const { expect } = require('chai');


let contractInstance;
let accounts = [];
let owner;

async function init() {
    accounts = await ethers.getSigners();
    owner = accounts[0];

    contractInstance = await ethers.deployContract("Test");
    console.log('====contract address====', await contractInstance.getAddress());
}

describe('Test', () => {

    before(async() => {
        await init();
    });

    describe('foo', () => {
        it('should-be-empty-string', async() => {
            let foo = await contractInstance.foo();
            expect(foo).to.be.equal('');
        });
    })

    describe('setFoo', () => {
        it('should-be-bar', async() => {
            await contractInstance.connect(owner).setFoo();

            let foo = await contractInstance.foo();

            expect(foo).to.be.equal('bar');
        });
    })

});
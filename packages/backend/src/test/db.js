const { expect } = require('chai');
const { db } = require('./testUtils');


// describe('database', () => {
//     describe('create', () => {
//         it('createUserById', async () => {
//             await db.deleteAll('user');

//             let user = { address: 'addr1' };
//             let id = await db.createUser(user);

//             let dbUser = await db.getUserById(id);

//             expect(id).to.be.not.null;
//             expect(dbUser.id).to.equal(id);
//             expect(dbUser.address).to.equal(user.address);
//         });
//     });

//     describe('select', () => {
//         it('getUserById', async () => {
//             await db.deleteAll('user');

//             let user = { address: 'addr1' };
//             let id = await db.createUser(user);

//             let dbUser = await db.getUserById(id);

//             expect(dbUser.id).to.equal(id);
//             expect(dbUser.address).to.equal(user.address);
//         });

//         it('getAll', async () => {
//             await db.deleteAll('user');

//             {
//                 let user = { address: 'addr1' };
//                 let id = await db.createUser(user);
//             }

//             {
//                 let user = { address: 'addr2' };
//                 let id = await db.createUser(user);
//             }

//             let dbUsers = await db.getAll('user');

//             expect(dbUsers.length).to.equal(2);
//         });
//     });

//     describe('delete', () => {
//         it('deleteUserById', async () => {
//             await db.deleteAll('user');

//             let user = { address: 'addr1' };
//             let id = await db.createUser(user);

//             {
//                 let dbUsers = await db.getAll('user');
//                 expect(dbUsers.length).to.equal(1);
//             }

//             {
//                 let numOfDel = await db.deleteUserById(id);
//                 expect(numOfDel).to.equal(1);
//             }

//             {
//                 let dbUsers = await db.getAll('user');
//                 expect(dbUsers.length).to.equal(0);
//             }
//         });

//         it('deleteAll', async () => {
//             await db.deleteAll('user');

//             {
//                 let user = { address: 'addr1' };
//                 let id = await db.createUser(user);
//             }

//             {
//                 let user = { address: 'addr2' };
//                 let id = await db.createUser(user);
//             }

//             let numOfDelete = await db.deleteAll('user');
//             let dbUsers = await db.getAll('user');

//             expect(numOfDelete).to.equal(2);
//             expect(dbUsers.length).to.equal(0);
//         });
//     });

//     describe('update', () => {
//         it('updateUserById', async () => {
//             await db.deleteAll('user');

//             let user = { address: 'addr1' };
//             let id = await db.createUser(user);

//             let newAddress = 'addr2';

//             {
//                 let numOdDel = await db.updateUserById({ 'id': id, 'address': newAddress });
//                 expect(numOdDel).to.equal(1);
//             }

//             {
//                 let dbUser = await db.getUserById(id);
//                 expect(dbUser.address).to.equal(newAddress);
//             }
//         });
//     });
// });
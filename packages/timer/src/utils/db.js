const db = require('./postgresql');

const getAll = db.getAll;
const deleteAll = db.deleteAll;

const getUserById = db.getUserById;
const createUser = db.createUser;
const deleteUserById = db.deleteUserById;
const updateUserById = db.updateUserById;


module.exports = {
    getAll,
    deleteAll,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById,
};
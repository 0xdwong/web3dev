const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
    },
    pool: { min: 0, max: 10 }
});


async function getUserById(id) {
    let reslut = await knex('user').where('id', id).select();
    return reslut[0];
}

async function createUser(data) {
    // should return inserted id;
    let { address } = data;
    // let reslut = await knex('user').insert({ 'address': address });
    let reslut = await knex
        .insert({ 'address': address }, ['id'])
        .into('user');

    return reslut[0].id;
}

async function deleteUserById(id) {
    // should return num of row deleted;
    let reslut = await knex('user').where('id', id).del();
    return reslut;
}

async function updateUserById(data) {
    // should return num of row affected;
    let { id, address } = data;
    let reslut = await knex('user').where('id', '=', id).update({
        'address': address,
    });

    return reslut;
}

async function getAll(table) {
    let reslut = await knex(table).select();
    return reslut;
}

async function deleteAll(table) {
    // should return num of row deleted;
    let reslut = await knex(table).del();
    return reslut;
}


module.exports = {
    getAll,
    deleteAll,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById
};
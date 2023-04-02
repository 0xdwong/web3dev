const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ 'path': path.join(path.resolve(__dirname, '../..'), '.env.test') });

const dbUtil = require('../utils/db');


async function main() {
    let r;

    r = await dbUtil.getUserById(1);

    console.log(r);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
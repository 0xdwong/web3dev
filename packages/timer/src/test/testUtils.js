const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ 'path': path.join(path.resolve(__dirname, '../..'), '.env.test') });


module.exports = {};
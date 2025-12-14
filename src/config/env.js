const { jwt } = require('zod');

require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWTSECRET,
    databaseUrl: process.env.DATABASEURL
}